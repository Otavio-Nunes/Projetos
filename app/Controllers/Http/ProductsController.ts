import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import CreateProductValidator from 'App/Validators/CreateProductValidator'
import UpdateproductValidator from 'App/Validators/UpdateproductValidator'

export default class ProductsController {

    public async index(ctx: HttpContextContract) {
        const product = await Product.query().orderBy('name')
        return product
    }

    public async Cadastrar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(CreateProductValidator)
            const product = await Product.create(payload)
            return response.status(201).json(product)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateproductValidator)
            const product = await Product.findOrFail(request.param('id'))
            await product.
                merge({
                category: payload.category,
                name: payload.name,
                pages: payload.pages,
                author: payload.author,
                price: payload.price
            }).save()
            return response.status(201).json(product)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
    public async Deletar({request, response}: HttpContextContract) {
        try {
            const product = await Product.findOrFail(request.param('id'))
            await product.delete()
            return response.status(203)
        } catch (error) {
            return response.status(400).json(error)
        }
        

    }
}
