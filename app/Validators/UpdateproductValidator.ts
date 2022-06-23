import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateproductValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    category: schema.string(),
    name: schema.string(),
    pages: schema.number(),
    author: schema.string(),
    price: schema.number()
  })


  public messages: CustomMessages = {}
}
