'use strict'

const Message = use('App/Models/Message')

const connectedUsers = {}

class ChatController {
  constructor ({ socket, request, auth }) {
    this.socket = socket
    this.request = request
    this.auth = auth
  }

  onConnectedUser (data) {
    connectedUsers[data.name] = data
    this.socket.broadcastToAll('connectedUser', connectedUsers)
  }

  async onMessage (data) {
    const user = await this.auth.getUser()
    const message = await Message.create({ user_id: user.id, message: data.message })
    this.socket.broadcastToAll('message', { id: message.id, message: data.message, user: data.user })
  }
}

module.exports = ChatController
