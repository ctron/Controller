'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('MicroserviceStatuses', 'operating_duration', Sequelize.BIGINT)
    await queryInterface.addColumn('MicroserviceStatuses', 'start_time', Sequelize.BIGINT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('MicroserviceStatuses', 'operating_duration')
    await queryInterface.removeColumn('MicroserviceStatuses', 'start_time')
  }
}
