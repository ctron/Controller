'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tunnels', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
      },
      username: {
        type: Sequelize.TEXT,
        field: 'username'
      },
      password: {
        type: Sequelize.TEXT,
        field: 'password'
      },
      host: {
        type: Sequelize.TEXT,
        field: 'host'
      },
      rport: {
        type: Sequelize.INTEGER,
        field: 'remote_port'
      },
      lport: {
        type: Sequelize.INTEGER,
        defaultValue: 22,
        field: 'local_port'
      },
      rsakey: {
        type: Sequelize.TEXT,
        field: 'rsa_key'
      },
      closed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'closed'
      },
      iofogUuid: {
        type: Sequelize.TEXT,
        field: 'iofog_uuid',
        references: { model: 'Fogs', key: 'uuid' },
        onDelete: 'cascade'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tunnels')
  }
}
