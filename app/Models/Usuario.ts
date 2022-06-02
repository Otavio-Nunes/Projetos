import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public senha: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashSenha(Usuarios: Usuario) {
    if (Usuarios.$dirty.senha) {
      Usuarios.senha = await Hash.make(Usuarios.senha)
    }
  }
}
