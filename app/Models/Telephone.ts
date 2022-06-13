import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Telephone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clientId: number 

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column()
  public number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
