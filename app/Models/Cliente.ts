import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne} from '@ioc:Adonis/Lucid/Orm'
import Telefone from './Telefone'
import Venda from './Venda'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public cpf: string

  @hasMany(() => Venda)
  public venda: HasMany<typeof Venda>

  @hasOne(() => Telefone)
  public telefone: HasOne<typeof Telefone>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
