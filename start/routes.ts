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
  Route.get('/Listar', 'ClientesController.index')
  Route.post('/Cadastrar', 'ClientesController.Cadastrar')
  Route.put('/Atualizar/:id', 'ClientesController.Atualizar')
  Route.delete('/Deletar/:id', 'ClientesController.Deletar')
  Route.get('/Detalhar', 'clientesController.Detalhar')
}).prefix('/api/Clientes')

Route.group(() => {
  Route.get('/Listar', 'ProdutosController.index')
  Route.post('/Cadastrar', 'ProdutosController.Cadastrar')
  Route.put('/Atualizar/:id', 'ProdutosController.Atualizar')
  Route.delete('/Deletar/:id', 'ProdutosController.Deletar')
}).prefix('/api/Products')

Route.group(() => {
  Route.get('/Listar', 'UsersController.index')
  Route.post('/Cadastrar', 'UsersController.Cadastrar')
  Route.put('/Atualizar/:id', "UsersController.Atualizar")
  Route.delete('/Deletar/:id', "UsersController.Deletar")
  Route.post('/login', 'UsersController.login')
  
}).prefix('/api/Users')

Route.group(() => {
  Route.get('/Listar', 'EnderecosController.index')
  Route.post('/Cadastrar', 'EnderecosController.Cadastrar')
  Route.put('/Atualizar/:id', "EnderecosController.Atualizar")
  Route.delete('/Deletar/:id', 'EnderecosController.Deletar')
}).prefix('/api/Endereco')

Route.group(() => {
  Route.get('/listar', 'VendasController.index')
  Route.post('/Cadastrar', 'VendasController.Cadastrar')
  Route.put('/Atualizar/:id', 'VendasController.Atualizar')
  Route.delete('/Deletar/:id', 'VendasController.Deletar')
  Route.get('/filtrar/:id', 'VendasController.filtrar')
}).prefix('/api/vendas')

Route.group(() => {
  Route.get('/Listar', 'TelefonesController.index')
  Route.post('/Cadastrar', 'TelefonesController.Cadastrar')
  Route.put('/Atualizar/:id', 'VendasController.Atualizar')
  Route.delete('/Deletar/:id', 'TelefonesController.Deletar')
}).prefix('/api/Telefone')  