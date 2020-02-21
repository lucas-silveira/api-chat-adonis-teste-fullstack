'use strict'

class User {
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|string|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      address: 'string',
      phone: 'string'
    }
  }

  get messages () {
    return {
      'username.required': 'Você precisa informar um usuário.',
      'username.string': 'O formato do nome é inválido.',
      'username.unique': 'O usuário já está sendo utilizado.',
      'email.required': 'Você precisa informar um email.',
      'email.email': 'O formato do email é inválido.',
      'email.unique': 'O email já está sendo utilizado.',
      'password.required': 'Você precisa informar uma senha.',
      'password.confirmed': 'As senhas precisam ser iguais.',
      'address.string': 'O formato do endereço é inválido.',
      'phone.string': 'O formato do celular é inválido.'
    }
  }
}

module.exports = User
