'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Fogs', 'security_status', Sequelize.TEXT)
    await queryInterface.addColumn('Fogs', 'security_violation_info', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Fogs', 'security_status')
    await queryInterface.removeColumn('Fogs', 'security_violation_info')
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
