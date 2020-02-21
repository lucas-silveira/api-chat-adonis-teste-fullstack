'use strict'

class ForgotPasswordStore {
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required|string'
    }
  }

  get messages () {
    return {
      'email.required': 'Você precisa informar um email.',
      'email.email': 'O formato do email é inválido.',
      'email.unique': 'O email já está sendo utilizado.',
      'redirect_url.required': 'Você precisa informar uma url de redirecionamento.',
      'redirect_url.string': 'O formato da url é inválido.'
    }
  }
}

module.exports = ForgotPasswordStore
