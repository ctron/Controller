'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Microservices',
      'delete',
      Sequelize.BOOLEAN
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Microservices', 'delete')
  }
}
