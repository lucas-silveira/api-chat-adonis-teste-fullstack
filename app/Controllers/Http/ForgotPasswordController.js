'use strict'

const crypto = require('crypto')
const { isAfter, addDays } = require('date-fns')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    const email = request.input('email')
    const user = await User.findBy('email', email)

    if (!user) return response.status(400).send({ error: 'O usuário não foi encontrado.' })

    user.token = crypto.randomBytes(10).toString('hex')
    user.token_created_at = new Date()

    await user.save()

    await Mail.send(
      ['emails.forgot_password', 'emails.forgot_password-text'],
      {
        email,
        token: user.token,
        link: `${request.input('redirect_url')}?token=${user.token}`
      },
      message => {
        message
          .to(user.email)
          .from('lucas@chatadonis.com.br', 'Lucas | Chat Adonis')
          .subject('Recuperação de senha')
      }
    )
  }

  async update ({ request, response }) {
    const { token, password } = request.all()

    const user = await User.findBy('token', token)

    if (!user) return response.status(400).send({ error: 'O token é inválido.' })

    if (isAfter(new Date(), addDays(user.token_created_at, 2))) {
      return response.status(400).send({ error: 'O token expirou.' })
    }

    user.token = null
    user.token_created_at = null
    user.password = password

    await user.save()
  }
}

module.exports = ForgotPasswordController
