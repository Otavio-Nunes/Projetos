import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Product from 'App/Models/Product'
import Sale from 'App/Models/Sale'
import CreateSaleValidator from 'App/Validators/CreateSaleValidator'
import UpdateSaleValidator from 'App/Validators/UpdateSaleValidator'

export default class SalesController {
    public async index(ctx: HttpContextContract) {
        const sale = await Sale.all()
        return sale
    }

    public async Cadastrar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(CreateSaleValidator)
            const sale = await Sale.create(payload)
            const cliente = await Client.findOrFail(2)
            await sale.related('client').associate(cliente)
            const product = await Product.findOrFail(7)
            await sale.related('product').associate(product)
            await sale.save()
            return response.status(200).json(sale)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateSaleValidator)
            const sale = await Sale.find(request.param('id'))
            await sale?.merge({
                clientId: payload.clientId,
                productId: payload.productId,
                quantidade: payload.quantidade,
                precoUnitario: payload.precoUnitario,
                precoFinal: payload.precoFinal
            }).save()
            return response.status(201).json(sale)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Deletar({request, response}: HttpContextContract) {
        try {
            const sale = await Sale.findOrFail(request.param('id'))
            await sale.delete()
            await sale.related('client').dissociate()
            await sale.related('product').dissociate()
            return response.status(203)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async filtrar(ctx: HttpContextContract){
        return await Sale.query().whereHas('client', (salesQuery) => {
            salesQuery.where('client_id', ctx.request.param('id'))
            .where('created_at', 'like' , `%${ctx.request.qs().data}%`)
          }).orderBy('id', "desc")     
    }
}