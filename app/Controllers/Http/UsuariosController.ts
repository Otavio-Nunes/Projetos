import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async index(ctx: HttpContextContract) {
        const usuario = await Usuario.all()
        return usuario
    }

    public async login({auth, request, response}: HttpContextContract) {
        const {email, password} = request.only(['email', 'password'])

        try {
        const token = await auth.use('api').attempt(email, password)
        return token
        } catch(error) {
            console.log(error)
        return response.badRequest('Invalid credentials')
        }
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const usuario = new Usuario()
        usuario.username = ctx.request.input('username')
        usuario.email = ctx.request.input('email')
        usuario.password = ctx.request.input('password')
        await usuario.save()
        return usuario
    }

    public async Atualizar(ctx: HttpContextContract) {
        const usuario = await Usuario.find(ctx.request.param('id'))
        if (usuario != null) {
            usuario.username = ctx.request.input('username')
            usuario.email = ctx.request.input('email')
            usuario.password = ctx.request.input('password')
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
