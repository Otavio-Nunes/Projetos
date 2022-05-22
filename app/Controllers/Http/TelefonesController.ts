import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Telefone from 'App/Models/Telefone'


export default class TelefonesController {
    public async index(ctx: HttpContextContract) {
        const telefone = await Telefone.all()
        return telefone
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const telefone = new Telefone()
        const cliente = await Cliente.findOrFail(5)
        await telefone.related('cliente').associate(cliente)
        telefone.numero = ctx.request.input('numero')
        await telefone.save()
        return telefone
    }

    public async Atualizar(ctx: HttpContextContract) {
        const telefone = await Telefone.find(ctx.request.param('id'))
        if (telefone != null) {
            telefone.cliente = ctx.request.input('cliente')
            telefone.numero = ctx.request.input('numero')
            await telefone.save()
            return telefone
        } else {
            return "Telefone atualizado com sucesso!"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const telefone = await Telefone.findOrFail(ctx.request.param('id'))
        await telefone.delete()
        await telefone.related('cliente').dissociate()               
        return "Telefone deletado com sucesso!"
    }
}
