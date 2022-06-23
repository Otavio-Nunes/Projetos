import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Sale from 'App/Models/Sale'
import CreateClientValidator from 'App/Validators/CreateClientValidator'
import UpdateClientValidator from 'App/Validators/UpdateClientValidator'

export default class ClientsController {
    public async index(ctx: HttpContextContract) {
        const client = await Client.query().orderBy('id')
        return client
    }

    public async Cadastrar({request, response}: HttpContextContract) {
       try {
        const payload = await request.validate(CreateClientValidator)
        const client = await Client.create(payload)
        return response.status(201).json(client)
       } catch (error) {
        return response.status(400).json(error)
       }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateClientValidator)
            const client = await Client.findOrFail(request.param('id'))
            await client.
            merge ({
                username: payload.username,
                cpf: payload.cpf
            }).save()
            return response.status(201).json(client)
        } catch (error) {
            return response.status(400).json(error)
        }
        
    }
    public async Deletar({request, response}: HttpContextContract){
        try {
        const client = await Client.findOrFail(request.param('id'))
        await client.delete()
        return response.status(203)
        } catch (error) {
        return response.status(400).json(error)
        }
    }

    public async Detalhar(ctx: HttpContextContract){
        return await Sale.query().whereHas('client', (salesQuery) => {
            salesQuery.where('client_id', '2')
          }).orderBy('id', "desc")     
    }
}