import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Sale from './Sale'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Sale)
  public sale: BelongsTo<typeof Sale>

  @column()
  public salesId: number

  @column()
  public category: string

  @column()
  public name: string

  @column()
  public pages: number

  @column()
  public author: string

  @column()
  public price: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
