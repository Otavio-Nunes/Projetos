import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index(ctx: HttpContextContract) {
        const user = await User.all()
        return user
    }

    public async login({auth, request, response}: HttpContextContract){
        const email = request.input('email')
        const password = request.input('password')
        
        try {
            const usuario = await User.findBy('email', email)

            const token = await auth.use('api').attempt(email, password, {
              name: usuario?.serialize().email 
            })
            return {token, usuario: usuario?.serialize()}
        } catch {
            return response.badRequest('invalid credentials')
        }
    }

    public async Cadastrar(ctx: HttpContextContract) {
        const user = new User()
        user.username = ctx.request.input('username')
        user.email = ctx.request.input('email')
        user.password = ctx.request.input('password')
        await user.save()
        return user
    }

    public async Atualizar(ctx: HttpContextContract) {
        const user = await User.find(ctx.request.param('id'))
        if (user != null) {
            user.username = ctx.request.input('username')
            user.email = ctx.request.input('email')
            user.password = ctx.request.input('password')
            await user.save()
            return user
        } else {
            return "Não foi possivel atualizar o Usuario!"
        }
    }

    public async Deletar(ctx: HttpContextContract) {
        const user = await User.findOrFail(ctx.request.param('id'))
        await user.delete()
        return "Usuario deletado com sucesso"
    }

}
