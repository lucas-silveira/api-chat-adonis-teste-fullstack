'use strict'

class UserStore {
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      name: 'required|string',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      address: 'string',
      phone: 'string'
    }
  }

  get messages () {
    return {
      'name.required': 'Você precisa informar um usuário.',
      'name.string': 'O formato do nome é inválido.',
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

module.exports = UserStore
