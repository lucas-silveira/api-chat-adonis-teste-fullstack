'use strict'

class ForgotPasswordUpdate {
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      token: 'required|string',
      password: 'required|confirmed'
    }
  }

  get messages () {
    return {
      'token.required': 'Você precisa informar o token.',
      'token.string': 'O formato do token é inválido.',
      'password.required': 'Você precisa informar uma senha.',
      'password.confirmed': 'As senhas precisam ser iguais.'
    }
  }
}

module.exports = ForgotPasswordUpdate
