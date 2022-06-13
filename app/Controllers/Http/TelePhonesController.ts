import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Telephone from 'App/Models/Telephone'


export default class telePhonesController {
    public async index(ctx: HttpContextContract) {
        const telephone = await Telephone.all()
        return telephone
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const telephone = new Telephone()
        const cliente = await Client.findOrFail(5)
        await telephone.related('client').associate(cliente)
        telephone.number = ctx.request.input('number')
        await telephone.save()
        return telephone
    }

    public async Atualizar(ctx: HttpContextContract) {
        const telephone = await Telephone.find(ctx.request.param('id'))
        if (telephone != null) {
            telephone.client = ctx.request.input('client')
            telephone.number = ctx.request.input('number')
            await telephone.save()
            return telephone
        } else {
            return "Telefone atualizado com sucesso!"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const telefone = await Telephone.findOrFail(ctx.request.param('id'))
        await telefone.delete()
        await telefone.related('client').dissociate()               
        return "Telefone deletado com sucesso!"
    }
}
