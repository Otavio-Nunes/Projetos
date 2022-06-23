import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateSaleValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    clientId: schema.number(),
    productId: schema.number(),
    quantidade: schema.number(),
    precoUnitario: schema.number(),
    precoFinal: schema.number()
  })


  public messages: CustomMessages = {}
}
