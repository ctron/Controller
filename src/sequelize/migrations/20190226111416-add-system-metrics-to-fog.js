'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Fogs', 'system-available-memory', Sequelize.BIGINT)
    await queryInterface.addColumn('Fogs', 'system-available-disk', Sequelize.BIGINT)
    await queryInterface.addColumn('Fogs', 'system-total-cpu', Sequelize.FLOAT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Fogs', 'system-available-memory')
    await queryInterface.removeColumn('Fogs', 'system-available-disk')
    await queryInterface.removeColumn('Fogs', 'system-total-cpu')
    // restore constraints. Because Sequelize has problem with Sqlite constraints
    await queryInterface.addConstraint('Fogs', ['user_id'], {
      type: 'FOREIGN KEY',
      name: 'userId',
      references: {
        name: 'userId',
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.addConstraint('Fogs', ['fog_type_id'], {
      type: 'FOREIGN KEY',
      name: 'fogTypeId',
      references: {
        name: 'fogTypeId',
        table: 'FogTypes',
        field: 'id'
      },
      onDelete: 'set null'
    })
  }
}
