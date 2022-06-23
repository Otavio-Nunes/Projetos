import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
import LoginUserValidator from 'App/Validators/LoginUserValidator'
import User from 'App/Models/User'

export default class UsersController {
    public async index(ctx: HttpContextContract) { 
        const user = await User.all()
        return user
    }

    public async login({auth, request, response}: HttpContextContract){
        try {
            const payload = await request.validate(LoginUserValidator)

            const token = await auth.use('api').attempt(payload.email, payload.password, {
                expiresIn: '30mins',
                
            })
            return { token }
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    public async Cadastrar({request, response}: HttpContextContract) {
       try {
        const payload = await request.validate(CreateUser)
        const user = await User.create(payload)
        return response.status(201).json(user)
       } catch (error) {
        return response.status(400).json(error)
       }
    }

    public async Atualizar({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(UpdateUserValidator)
            const user = await User.findOrFail(request.param('id'))
            await user
                    .merge({ username: payload.username,
                             email: payload.email,
                             password: payload.password })
                    .save()
                    
            return response.status(201).json(user)
           } catch (error) {
            return response.status(400).json(error)
           }
    }

    public async Deletar({request, response}: HttpContextContract) {
        try{
            const user = await User.findOrFail(request.param('id'))
            await user.delete()
            return response.status(203)
        } catch (error) {
            return response.status(400).json(error)
        }
    }

}
