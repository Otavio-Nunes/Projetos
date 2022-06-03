import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Product from 'App/Models/Product'
import Sale from 'App/Models/Sale'

export default class SalesController {
    public async index(ctx: HttpContextContract) {
        const sale = await Sale.all()
        return sale
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const sale = new Sale()
        sale.quantidade = ctx.request.input('quantidade')
        sale.precoUnitario = ctx.request.input('precoUnitario')
        sale.precoFinal = ctx.request.input('precoFinal')
        const cliente = await Client.findOrFail(6)
        await sale.related('client').associate(cliente)
        const product = await Product.findOrFail(6)
        await sale.related('product').associate(product)
        await sale.save()
        return sale
    }

    public async Atualizar(ctx: HttpContextContract) {
        const sale = await Sale.find(ctx.request.param('id'))
        if (sale != null) {
            sale.client = ctx.request.input('client')
            sale.product = ctx.request.input('product')
            sale.quantidade = ctx.request.input('quantidade')
            sale.precoUnitario = ctx.request.input('precoUnitario')
            sale.precoFinal = ctx.request.input('precoFinal')
            await sale.save()
            return sale
        } else {
            return "Não foi possivel atualizar a venda"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const sale = await Sale.findOrFail(ctx.request.param('id'))
        await sale.delete()
        await sale.related('client').dissociate()
        await sale.related('product').dissociate() 
        return "venda deletada com sucesso!"
    }

    public async filtrar(ctx: HttpContextContract){
        return await Sale.query().whereHas('client', (salesQuery) => {
            salesQuery.where('cliente_id', ctx.request.param('id'))
            .where('created_at', 'like' , `%${ctx.request.qs().data}%`)
          }).orderBy('id', "desc")     
    }
}