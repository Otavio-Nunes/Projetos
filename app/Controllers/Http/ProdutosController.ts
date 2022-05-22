import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutosController {

    public async index(ctx: HttpContextContract) {
        const produto = await Produto.query().orderBy('nome')
        return produto
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const produto = new Produto()
        produto.categoria = ctx.request.input('categoria')
        produto.nome = ctx.request.input('nome')
        produto.paginas = ctx.request.input('paginas')
        produto.autor = ctx.request.input('autor')
        produto.preco = ctx.request.input('preco')
        await produto.save()
        return produto
    }

    public async Atualizar(ctx: HttpContextContract) {
        const produto = await Produto.find(ctx.request.param('id'))
        if (produto != null) {
            produto.categoria = ctx.request.input('categoria')
            produto.nome = ctx.request.input('nome')
            produto.paginas = ctx.request.input('paginas')
            produto.autor = ctx.request.input('autor')
            produto.preco = ctx.request.input('preco')
            await produto.save()
            return produto
        } else {
            return "Não foi possivel atualizar o produto!"
        }
    }
    public async Deletar(ctx: HttpContextContract) {
        const produto = await Produto.findOrFail(ctx.request.param('id'))
        await produto.delete()
        return "Produto deletado com sucesso!"

    }
}
