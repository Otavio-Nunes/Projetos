import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateSaleValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    quantidade: schema.number(),
    precoUnitario: schema.number(),
    precoFinal: schema.number()
  })


  public messages: CustomMessages = {}
}
