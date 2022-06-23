import { Response } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import CreateAddressValidator from 'App/Validators/CreateAddressValidator'
import UpdateAddressValidator from 'App/Validators/UpdateAddressValidator'


export default class AddressController {

    public async index(ctx: HttpContextContract) {
        const address = await Address.query().orderBy('id')
        return address
    }

    public async Cadastrar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(CreateAddressValidator)
            const address = await Address.create(payload)
            return response.status(201).json(address)
           } catch (error) {
            return response.status(400).json(error)
           }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateAddressValidator)
            const address = await Address.findOrFail(request.param('id'))
            await address
            .merge({
                road: payload.road,
                number: payload.number,
                district: payload.district,
                city: payload.city
            }).save()
            await address.save()
            return response.status(201).json(address)
        } catch (error) {
            return response.status(400).json(error)
        }
    } 

    public async Deletar({request, response}: HttpContextContract) {
        try {
            const address = await Address.findOrFail(request.param('id'))
            await address.delete()
            return response.status(203)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}
