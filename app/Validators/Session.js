'use strict'

class Session {
  async fails (errorMessages) {
    return this.ctx.response.status(400).send({ error: errorMessages[0].message })
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'Você precisa informar um email.',
      'email.email': 'O formato do email é inválido.',
      'password.required': 'Você precisa informar uma senha.'
    }
  }
}

module.exports = Session
