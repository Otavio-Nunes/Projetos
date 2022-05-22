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
  Route.get('/', async () => {
    return ('teste de rotas ok')
  });
})

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
}).prefix('/api/Produtos')

Route.group(() => {
  Route.get('/Listar', 'UsuariosController.index')
  Route.post('Cadastrar', 'UsuariosController.Cadastrar')
  Route.put('Atualizar/:id', "UsuariosController.Atualizar")
  Route.delete('Deletar/:id', "UsuariosController.Deletar")
}).prefix('/api/Usuarios')

Route.group(() => {
  Route.get('/Listar', 'EnderecosController.index')
  Route.post('/Cadastrar', 'EnderecosController.Cadastrar')
  Route.put('/Atualizar/:id', "EnderecosController.Atualizar")
  Route.delete('/Deletar/:id', 'EnderecosController.Deletar')
}).prefix('/api/Endereco')

Route.group(() => {
  Route.get('/Listar', 'VendasController.index')
  Route.post('/Cadastrar', 'VendasController.Cadastrar')
  Route.put('/Atualizar/:id', 'VendasController.Atualizar')
  Route.delete('/Deletar/:id', 'VendasController.Deletar')
}).prefix('/api/Vendas')

Route.group(() => {
  Route.get('/Listar', 'TelefonesController.index')
  Route.post('/Cadastrar', 'TelefonesController.Cadastrar')
  Route.put('/Atualizar/:id', 'VendasController.Atualizar')
  Route.delete('/Deletar/:id', 'TelefonesController.Deletar')
}).prefix('/api/Telefone')  