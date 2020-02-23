'use strict'

const Helpers = use('Helpers')
const User = use('App/Models/User')

class FileController {
  async show ({ params, response }) {
    const user = await User.findBy('file', params.name)

    if (!user) return response.status(404).send({ error: 'O arquivo não foi encontrado.' })

    return response.download(Helpers.tmpPath(`uploads/${user.file}`))
  }
}

module.exports = FileController
