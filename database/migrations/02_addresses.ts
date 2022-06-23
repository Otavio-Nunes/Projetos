import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Address extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('road').notNullable()
      table.integer('number').notNullable()
      table.string('district').notNullable()
      table.string('city').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
