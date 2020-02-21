'use strict'

const Hash = use('Hash')
const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const userExists = await User.findBy('email', email)

    if (!userExists) return response.status(400).send({ error: 'O email não existe.' })

    const passwordIsCorrect = await Hash.verify(password, userExists.password)

    if (!passwordIsCorrect) return response.status(400).send({ error: 'A senha está incorreta.' })

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
