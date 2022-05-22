import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async index(ctx: HttpContextContract) {
        const usuario = await Usuario.all()
        return usuario
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const usuario = new Usuario()
        usuario.email = ctx.request.input('email')
        usuario.senha = ctx.request.input('senha')
        await usuario.save()
        return usuario
    }

    public async Atualizar(ctx: HttpContextContract) {
        const usuario = await Usuario.find(ctx.request.param('id'))
        if (usuario != null) {
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
