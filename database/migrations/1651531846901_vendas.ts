import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('produto_id')
      .unsigned()
      .references('produtos.id')
      .onDelete('CASCADE')
      table
      .integer('cliente_id')
      .unsigned()
      .references('clientes.id')
      .onDelete('CASCADE')
      table.integer('quantidade')
      table.float('preco_Unitario')
      table.float('preco_Final')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
