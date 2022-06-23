import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAddressValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    road: schema.string(),
    number: schema.number(),
    district: schema.string(),
    city: schema.string()

  })


  public messages: CustomMessages = {}
}
