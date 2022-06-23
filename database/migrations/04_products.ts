import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('category').notNullable()
      table.string('name').notNullable()
      table.integer('pages').notNullable()
      table.string('author').notNullable()
      table.float('price').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
