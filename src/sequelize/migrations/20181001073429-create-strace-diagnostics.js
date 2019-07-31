'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StraceDiagnostics', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
      },
      straceRun: {
        type: Sequelize.BOOLEAN,
        field: 'strace_run'
      },
      buffer: {
        type: Sequelize.TEXT,
        field: 'buffer',
        defaultValue: ''
      },
      microserviceUuid: {
        type: Sequelize.TEXT,
        field: 'microservice_uuid',
        references: { model: 'Microservices', key: 'uuid' },
        onDelete: 'cascade'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StraceDiagnostics')
  }
}
