'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokenpasswordSchema extends Schema {
  up () {
    this.create('tokenpasswords', (table) => {
      table.increments()
      table.string('session_user_id')
      table.string('session_type')
      table.string('token')
      table.timestamps()
    })
  }

  down () {
    this.drop('tokenpasswords')
  }
}

module.exports = TokenpasswordSchema
