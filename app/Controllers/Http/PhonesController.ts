import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Telephone from 'App/Models/Telephone'


export default class PhonesController {
    public async index(ctx: HttpContextContract) {
        const telefone = await Telephone.all()
        return telefone
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const telefone = new Telephone()
        const cliente = await Client.findOrFail(6)
        await telefone.related('client').associate(cliente)
        telefone.number = ctx.request.input('number')
        await telefone.save()
        return telefone
    }

    public async Atualizar(ctx: HttpContextContract) {
        const telefone = await Telephone.find(ctx.request.param('id'))
        if (telefone != null) {
            telefone.client = ctx.request.input('client')
            telefone.number = ctx.request.input('number')
            await telefone.save()
            return telefone
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
