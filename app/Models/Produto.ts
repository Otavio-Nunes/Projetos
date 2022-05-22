import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Venda)
  public venda: BelongsTo<typeof Venda>

  @column()
  public vendaId: number

  @column()
  public categoria: string

  @column()
  public nome: string

  @column()
  public paginas: number

  @column()
  public autor: string

  @column()
  public preco: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
