import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateTelephoneValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    clientId: schema.number(),
    number: schema.number()

  })


  public messages: CustomMessages = {}
}
