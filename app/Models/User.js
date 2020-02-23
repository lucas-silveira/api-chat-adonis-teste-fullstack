'use strict'

const Model = use('Model')
const Hash = use('Hash')
const Env = use('Env')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get computed () {
    return ['avatar']
  }

  getAvatar ({ file }) {
    return `${Env.get('APP_URL')}/files/${file}`
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
