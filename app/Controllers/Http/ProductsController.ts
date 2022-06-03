import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {

    public async index(ctx: HttpContextContract) {
        const product = await Product.query().orderBy('nome')
        return product
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const product = new Product()
        product.category = ctx.request.input('category')
        product.name = ctx.request.input('name')
        product.pages = ctx.request.input('pages')
        product.author = ctx.request.input('author')
        product.price = ctx.request.input('price')
        await product.save()
        return product
    }

    public async Atualizar(ctx: HttpContextContract) {
        const product = await Product.find(ctx.request.param('id'))
        if (product != null) {
            product.category = ctx.request.input('category')
            product.name = ctx.request.input('name')
            product.pages = ctx.request.input('pages')
            product.author = ctx.request.input('author')
            product.price = ctx.request.input('price')
            await product.save()
            return product
        } else {
            return "Não foi possivel atualizar o produto!"
        }
    }
    public async Deletar(ctx: HttpContextContract) {
        const product = await Product.findOrFail(ctx.request.param('id'))
        await product.delete()
        return "Produto deletado com sucesso!"

    }
}
