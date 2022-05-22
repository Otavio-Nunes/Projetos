import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Produto from 'App/Models/Produto'
import Vendas from 'App/Models/Venda'

export default class VendasController {
    public async index(ctx: HttpContextContract) {
        const vendas = await Vendas.all()
        return vendas
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const vendas = new Vendas()
        vendas.quantidade = ctx.request.input('quantidade')
        vendas.precoUnitario = ctx.request.input('precoUnitario')
        vendas.precoFinal = ctx.request.input('precoFinal')
        const cliente = await Cliente.findOrFail(8)
        await vendas.related('cliente').associate(cliente)
        const produto = await Produto.findOrFail(10)
        await vendas.related('produto').associate(produto)
        await vendas.save()
        return vendas
    }

    public async Atualizar(ctx: HttpContextContract) {
        const vendas = await Vendas.find(ctx.request.param('id'))
        if (vendas != null) {
            vendas.cliente = ctx.request.input('cliente')
            vendas.produto = ctx.request.input('produto')
            vendas.quantidade = ctx.request.input('quantidade')
            vendas.precoUnitario = ctx.request.input('precoUnitario')
            vendas.precoFinal = ctx.request.input('precoFinal')
            await vendas.save()
            return vendas
        } else {
            return "Não foi possivel atualizar a venda"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const vendas = await Vendas.findOrFail(ctx.request.param('id'))
        await vendas.delete()
        await vendas.related('cliente').dissociate()
        await vendas.related('produto').dissociate() 
        return "venda deletada com sucesso!"
    }
}