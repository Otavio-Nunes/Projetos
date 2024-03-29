import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sales extends BaseSchema {
  protected tableName = 'sales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('product_id')
      .unsigned()
      .references('products.id')
      .onDelete('CASCADE')
      .notNullable()
      table
      .integer('client_id')
      .unsigned()
      .references('clients.id')
      .onDelete('CASCADE')
      .notNullable()
      table.integer('quantidade').notNullable()
      table.float('preco_Unitario').notNullable()
      table.float('preco_Final').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
