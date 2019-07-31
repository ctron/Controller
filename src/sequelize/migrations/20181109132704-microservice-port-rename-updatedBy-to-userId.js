'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('MicroservicePorts', 'updated_by', 'user_id')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('MicroservicePorts', 'user_id', 'updated_by')
  }
}
