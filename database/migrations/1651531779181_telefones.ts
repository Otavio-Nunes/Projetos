import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Telephone extends BaseSchema {
  protected tableName = 'telephone'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('client_id')
      .unsigned()
      .references('clients.id')
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
