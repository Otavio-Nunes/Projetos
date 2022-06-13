/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/Listar', 'ClientsController.index')
  Route.post('/Cadastrar', 'ClientsController.Cadastrar')
  Route.put('/Atualizar/:id', 'ClientsController.Atualizar')
  Route.delete('/Deletar/:id', 'ClientsController.Deletar')
  Route.get('/Detalhar', 'ClientsController.Detalhar')
}).prefix('/api/clients').middleware('auth')

Route.group(() => {
  Route.get('/Listar', 'ProductsController.index')
  Route.post('/Cadastrar', 'ProductsController.Cadastrar')
  Route.put('/Atualizar/:id', 'ProductsController.Atualizar')
  Route.delete('/Deletar/:id', 'ProductsController.Deletar')
}).prefix('/api/products').middleware('auth')

Route.group(() => {
  Route.get('/Listar', 'UsersController.index')
  Route.post('/Cadastrar', 'UsersController.Cadastrar')
  Route.put('/Atualizar/:id', "UsersController.Atualizar")
  Route.delete('/Deletar/:id', "UsersController.Deletar")
  Route.post('/login', 'UsersController.login')
  
}).prefix('/api/users')

Route.group(() => {
  Route.get('/Listar', 'AddressController.index')
  Route.post('/Cadastrar', 'AddressController.Cadastrar')
  Route.put('/Atualizar/:id', "AddressController.Atualizar")
  Route.delete('/Deletar/:id', 'AddressController.Deletar')
}).prefix('/api/address')

Route.group(() => {
  Route.get('/listar', 'SalesController.index')
  Route.post('/Cadastrar', 'SalesController.Cadastrar')
  Route.put('/Atualizar/:id', 'SalesController.Atualizar')
  Route.delete('/Deletar/:id', 'SalesController.Deletar')
  Route.get('/filtrar/:id', 'SalesController.filtrar')
}).prefix('/api/sales').middleware('auth')

Route.group(() => {
  Route.get('/Listar', 'TelephonesController.index')
  Route.post('/Cadastrar', 'TelephonesController.Cadastrar')
  Route.put('/Atualizar/:id', 'TelephonesController.Atualizar')
  Route.delete('/Deletar/:id', 'TelephonesController.Deletar')
}).prefix('/api/telephones')  