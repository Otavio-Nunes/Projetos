import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
      username: schema.string(),
      email: schema.string([
        rules.email()
      ]),
      password: schema.string([
        rules.minLength(4)
      ])
  })
  

  public messages: CustomMessages = {}
}
