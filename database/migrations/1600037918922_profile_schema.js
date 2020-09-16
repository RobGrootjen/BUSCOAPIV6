'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('users')
      table.string('avatar', 300).notNullable().defaultTo('https://res.cloudinary.com/scute/image/upload/v1595981235/recursos/30-307416_profile-icon-png-image-free-download-searchpng-employee_ogifkm.png')    
      table.string('avatarpublicid').notNullable()
      table.string('number', 15).notNullable()
      table.text('location', 100)
      table.text('bio', 100).nullable()
      table.string('cumpleaños',8).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
