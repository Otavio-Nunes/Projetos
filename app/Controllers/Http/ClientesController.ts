import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Venda from 'App/Models/Venda';
//import Telefone from 'App/Models/Telefone'


export default class PostController {
    public async index(ctx: HttpContextContract) {
        const cliente = await Cliente.query().orderBy('id')
        return cliente
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const cliente = new Cliente()
        cliente.nome = ctx.request.input('nome')
        cliente.cpf = ctx.request.input('cpf')
        await cliente.save()
        return cliente
    }

    public async Atualizar(ctx: HttpContextContract) {
        const cliente = await Cliente.find(ctx.request.param('id'))
        if (cliente != null) {
            cliente.nome = ctx.request.input('nome')
            cliente.cpf = ctx.request.input('cpf')
            await cliente.save()
            return cliente
        } else {
            return "Não foi possivel atualizar o cliente!"
        }
    }
    public async Deletar(ctx: HttpContextContract){
        const cliente = await Cliente.findOrFail(ctx.request.param('id'))
        await cliente.delete()
        return "Cliente deletado com sucesso!"
    }

    public async Detalhar(ctx: HttpContextContract){
        return await Venda.query().whereHas('cliente', (vendasQuery) => {
            vendasQuery.where('cliente_id', '5')
          }).orderBy('id', "desc")     
    }

}
