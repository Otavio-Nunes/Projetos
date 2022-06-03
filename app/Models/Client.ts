import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne} from '@ioc:Adonis/Lucid/Orm'
import Telephone from './Telephone'
import Sales from './Sale'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public cpf: string

  @hasMany(() => Sales)
  public sales: HasMany<typeof Sales>

  @hasOne(() => Telephone)
  public telephone: HasOne<typeof Telephone>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
