import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Produto from './Produto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public clienteId: number

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @column()
  public produtoId: number

  @belongsTo(() => Produto)
  public produto: BelongsTo<typeof Produto>

  @column()
  public quantidade: number

  @column()
  public precoUnitario: number

  @column()
  public precoFinal: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
