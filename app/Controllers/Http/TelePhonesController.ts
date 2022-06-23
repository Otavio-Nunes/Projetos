import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Telephone from 'App/Models/Telephone'
import CreateTelePhoneValidator from 'App/Validators/CreateTelePhoneValidator'
import UpdateTelephoneValidator from 'App/Validators/UpdateTelephoneValidator'


export default class telePhonesController {
    public async index(ctx: HttpContextContract) {
        const telephone = await Telephone.all()
        return telephone
    }

    public async Cadastrar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(CreateTelePhoneValidator)
            const telephone = await Telephone.create(payload)
            const cliente = await Client.findOrFail(2)
            await telephone.related('client').associate(cliente)
            return response.status(201).json(telephone)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateTelephoneValidator)
            const telephone = await Telephone.findOrFail(request.param('id'))
            await telephone.merge({
                clientId: payload.clientId,
                number: payload.number
            }).save()
            return response.status(201).json(telephone)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Deletar({request, response}: HttpContextContract) {
        try {
            const telefone = await Telephone.findOrFail(request.param('id'))
            await telefone.delete()
            await telefone.related('client').dissociate()
            return response.status(203)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}
