import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Enderecos extends BaseSchema {
  protected tableName = 'enderecos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('rua')
      table.integer('numero')
      table.string('bairro')
      table.string('cidade')
      table.string('uf')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
