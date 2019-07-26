'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.post('users', 'UserController.store')
Route.post('/login', 'AuthController.login')
Route.post('/create', 'AccountController.create')
Route.get('/transactions', 'AccountController.view')
Route.put('/deposit/:id', 'AccountController.deposit')
Route.get('/withdraw/:id', 'AccountController.withdraw')
Route.post('/debit', 'AccountController.debit')
Route.post('/credit', 'AccountController.credit')
Route.get('/admin', 'AccountController.users')
Route.get('/admin/:id', 'AccountController.user')
Route.put('/activate/', 'AccountController.activate')
Route.delete('/activate/:id', 'AccountController.destroy')
Route.post('/staff/', 'AccountController.post')




