'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('forgot_password', 'ForgotPasswordController.store').validator('ForgotPasswordStore')

Route.put('forgot_password', 'ForgotPasswordController.update').validator('ForgotPasswordUpdate')
