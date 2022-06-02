import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey = 'email'

    await Usuario.updateOrCreateMany(uniqueKey, [
      {
        email: 'fred@gmail.com',
        senha: 'admin'
      },
      {
        
      },
      {

      }
    ])
    
    
  }
}
