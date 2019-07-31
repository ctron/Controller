'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Microservices', 'updated_by', 'user_id')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Microservices', 'user_id', 'updated_by')
  }
}
