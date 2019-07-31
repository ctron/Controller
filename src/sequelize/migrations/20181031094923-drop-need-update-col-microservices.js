'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Microservices', 'need_update')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Microservices',
      'need_update',
      Sequelize.BOOLEAN
    )
  }
}
