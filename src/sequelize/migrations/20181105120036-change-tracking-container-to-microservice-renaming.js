'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('ChangeTrackings', 'container_config', 'microservice_config')
    await queryInterface.renameColumn('ChangeTrackings', 'container_list', 'microservice_list')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('ChangeTrackings', 'microservice_config', 'container_config')
    await queryInterface.renameColumn('ChangeTrackings', 'microservice_list', 'container_list')
  }
}
