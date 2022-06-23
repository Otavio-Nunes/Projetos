import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateTelePhoneValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    number: schema.number()
  })


  public messages: CustomMessages = {}
}
