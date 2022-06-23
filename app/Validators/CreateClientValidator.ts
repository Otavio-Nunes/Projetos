import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    username: schema.string(),
    cpf: schema.string()
  })

 
  public messages: CustomMessages = {}
}
