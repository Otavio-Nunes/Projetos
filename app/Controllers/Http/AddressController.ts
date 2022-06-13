import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'


export default class AddressController {

    public async index(ctx: HttpContextContract) {
        const address = await Address.query().orderBy('id')
        return address
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const address = new Address()
        address.road = ctx.request.input('road')
        address.number = ctx.request.input('number')
        address.district = ctx.request.input('district')
        address.city = ctx.request.input('city')
        await address.save()
        return address
    }

    public async Atualizar(ctx: HttpContextContract) {
        const address = await Address.find(ctx.request.param('id'))
        if (address != null) {
            address.road = ctx.request.input('road')
            address.number = ctx.request.input('number')
            address.district = ctx.request.input('district')
            address.city = ctx.request.input('city')
            await address.save()
            return address
        } else {
            return "Não foi possivel atualizar o Endereço!"
        }
    } 

    public async Deletar(ctx: HttpContextContract) {
        const address = await Address.findOrFail(ctx.request.param('id'))
        await address.delete()
        return "Endereço deletado com sucesso!"
    }
}
