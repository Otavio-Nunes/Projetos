import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Endereco from 'App/Models/Endereco'


export default class EnderecosController {

    public async index(ctx: HttpContextContract) {
        const endereco = await Endereco.all()
        return endereco
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const endereco = new Endereco()
        endereco.rua = ctx.request.input('rua')
        endereco.numero = ctx.request.input('numero')
        endereco.bairro = ctx.request.input('bairro')
        endereco.cidade = ctx.request.input('cidade')
        endereco.uf = ctx.request.input('uf')
        await endereco.save()
        return endereco
    }

    public async Atualizar(ctx: HttpContextContract) {
        const endereco = await Endereco.find(ctx.request.param('id'))
        if (endereco != null) {
            endereco.rua = ctx.request.input('rua')
            endereco.numero = ctx.request.input('numero')
            endereco.bairro = ctx.request.input('bairro')
            endereco.cidade = ctx.request.input('cidade')
            endereco.uf = ctx.request.input('uf')
            await endereco.save()
            return endereco
        } else {
            return "Não foi possivel atualizar o Endereço!"
        }
    } 

    public async Deletar(ctx: HttpContextContract) {
        const endereco = await Endereco.findOrFail(ctx.request.param('id'))
        await endereco.delete()
        return "Endereço deletado com sucesso!"
    }
}
