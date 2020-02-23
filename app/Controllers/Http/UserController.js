'use strict'

const Helpers = use('Helpers')
const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const upload = request.file('file', { size: '2mb' })
    const fileName = `${Date.now()}.${upload.subtype}`

    await upload.move(Helpers.tmpPath('uploads'), {
      name: fileName
    })

    if (!upload.moved()) return response.status(500).send({ error: 'Ops! Algo deu errado no upload da imagem.' })

    const data = request.only(['name', 'email', 'password', 'address', 'phone'])
    const user = await User.create({ ...data, file: fileName })

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
