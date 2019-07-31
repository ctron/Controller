'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Flows', ['user_id'], {
      type: 'FOREIGN KEY',
      name: 'userId',
      references: {
        name: 'userId',
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Microservices', ['user_id'], {
      type: 'FOREIGN KEY',
      name: 'userId',
      references: {
        name: 'userId',
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Microservices', ['iofog_uuid'], {
      type: 'FOREIGN KEY',
      name: 'iofogUuid',
      references: {
        name: 'iofogUuid',
        table: 'Fogs',
        field: 'uuid'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Microservices', ['catalog_item_id'], {
      type: 'FOREIGN KEY',
      name: 'catalogItemId',
      references: {
        name: 'catalogItemId',
        table: 'CatalogItems',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Microservices', ['registry_id'], {
      type: 'FOREIGN KEY',
      name: 'registryId',
      references: {
        name: 'registryId',
        table: 'Registries',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Microservices', ['flow_id'], {
      type: 'FOREIGN KEY',
      name: 'flowId',
      references: {
        name: 'flowId',
        table: 'Flows',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('ChangeTrackings', ['iofog_uuid'], {
      type: 'FOREIGN KEY',
      name: 'iofogUuid',
      references: {
        name: 'iofogUuid',
        table: 'Fogs',
        field: 'uuid'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('MicroservicePorts', ['user_id'], {
      type: 'FOREIGN KEY',
      name: 'userId',
      references: {
        name: 'userId',
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('MicroservicePorts', ['microservice_uuid'], {
      type: 'FOREIGN KEY',
      name: 'microserviceUuid',
      references: {
        name: 'microserviceUuid',
        table: 'Microservices',
        field: 'uuid'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    // for SQLite
    // return queryInterface.renameColumn('Flows', 'user_id', 'user_id1')
    //   .then(() => {
    //     return queryInterface.renameColumn('Flows', 'user_id1', 'user_id')
    //   }).then(() => {
    //     return queryInterface.renameColumn('Microservices', 'user_id', 'user_id1')
    //   }).then(() => {
    //     return queryInterface.renameColumn('Microservices', 'user_id1', 'user_id')
    //   }).then(() => {
    //     return queryInterface.renameColumn('ChangeTrackings', 'iofog_uuid', 'iofog_uuid1')
    //   }).then(() => {
    //     return queryInterface.renameColumn('ChangeTrackings', 'iofog_uuid1', 'iofog_uuid')
    //   }).then(() => {
    //     return queryInterface.renameColumn('MicroservicePorts', 'user_id', 'user_id1')
    //   }).then(() => {
    //     return queryInterface.renameColumn('MicroservicePorts', 'user_id1', 'user_id')
    //   })

    // for other DB

    await queryInterface.removeConstraint('Flows', 'userId')
    await queryInterface.removeConstraint('Microservices', 'userId')
    await queryInterface.removeConstraint('Microservices', 'iofogUuid')
    await queryInterface.removeConstraint('Microservices', 'catalogItemId')
    await queryInterface.removeConstraint('Microservices', 'registryId')
    await queryInterface.removeConstraint('Microservices', 'flowId')
    await queryInterface.removeConstraint('ChangeTrackings', 'iofogUuid')
    await queryInterface.removeConstraint('MicroservicePorts', 'userId')
    await queryInterface.removeConstraint('MicroservicePorts', 'microserviceUuid')
  }
}
