import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Telefones extends BaseSchema {
  protected tableName = 'telefones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('cliente_id')
      .unsigned()
      .references('clientes.id')
      .onDelete('CASCADE')
      table.integer('numero')

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
