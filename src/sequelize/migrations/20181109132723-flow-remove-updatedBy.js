'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Flows', 'updated_by')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Flows',
      'updated_by',
      Sequelize.INTEGER
    )
  }
}
