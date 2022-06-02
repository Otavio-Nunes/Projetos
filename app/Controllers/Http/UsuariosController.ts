import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async index(ctx: HttpContextContract) {
        const usuario = await Usuario.all()
        return usuario
    }

    public async login({auth, request, response}: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('senha')

        try {
        const token = await auth.use('api').attempt(email, password)
        return token
        }     catch {
            return response.badRequest('Invalid credentials')
        }
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const usuario = new Usuario()
        usuario.nome = ctx.request.input('nome')
        usuario.email = ctx.request.input('email')
        usuario.senha = ctx.request.input('senha')
        await usuario.save()
        return usuario
    }

    public async Atualizar(ctx: HttpContextContract) {
        const usuario = await Usuario.find(ctx.request.param('id'))
        if (usuario != null) {
            usuario.nome = ctx.request.input('nome')
            usuario.email = ctx.request.input('email')
            usuario.senha = ctx.request.input('senha')
            await usuario.save()
            return usuario
        } else {
            return "Não foi possivel atualizar o Usuario!"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const usuario = await Usuario.findOrFail(ctx.request.param('id'))
        await usuario.delete()
        return "Usuario deletado com sucesso"
    }

}
