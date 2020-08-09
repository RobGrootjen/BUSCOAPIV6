'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Report extends Model {
    user () {
      return this.belongsTo('App/Models/User')
    }
    posts () {
      return this.belongsTo('App/Models/Post')
    }
}

module.exports = Report