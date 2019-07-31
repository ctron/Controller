'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Fogs', 'ip_address_external', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Fogs', 'ip_address_external')
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
