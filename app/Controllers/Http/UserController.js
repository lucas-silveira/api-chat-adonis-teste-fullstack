'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password', 'address', 'phone'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, response, auth }) {
    const user = await User.findBy('id', auth.user.id)

    const data = request.only(['name', 'email', 'password', 'address', 'phone'])

    if (data.email !== user.email) {
      const emailExists = await User.findBy('email', data.email)

      if (emailExists) return response.status(401).send({ error: 'O email já está sendo utilizado por outro usuário.' })
    }

    user.merge(data)

    await user.save()
  }
}

module.exports = UserController
