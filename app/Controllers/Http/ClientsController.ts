import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Sale from 'App/Models/Sale'

export default class ClientsController {
    public async index(ctx: HttpContextContract) {
        const client = await Client.query().orderBy('id')
        return client
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const client = new Client()
        client.username = ctx.request.input('username')
        client.cpf = ctx.request.input('cpf')
        await client.save()
        return client
    }

    public async Atualizar(ctx: HttpContextContract) {
        const client = await Client.find(ctx.request.param('id'))
        if (client != null) {
            client.username = ctx.request.input('username')
            client.cpf = ctx.request.input('cpf')
            await client.save()
            return client
        } else {
            return "Não foi possivel atualizar o cliente!"
        }
    }
    public async Deletar(ctx: HttpContextContract){
        const client = await Client.findOrFail(ctx.request.param('id'))
        await client.delete()
        return "Cliente deletado com sucesso!"
    }

    public async Detalhar(ctx: HttpContextContract){
        return await Sale.query().whereHas('client', (salesQuery) => {
            salesQuery.where('client_id', '2')
          }).orderBy('id', "desc")     
    }
}
