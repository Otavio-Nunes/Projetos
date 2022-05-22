import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('categoria')
      table.string('nome')
      table.integer('paginas')
      table.string('autor')
      table.float('preco')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
