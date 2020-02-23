'use strict'

const Message = use('App/Models/Message')

class MessageController {
  async index ({ request }) {
    const messages = await Message.query()
      .with('user', builder => builder.select('id', 'name', 'email', 'file')).fetch()

    return messages
  }
}

module.exports = MessageController
