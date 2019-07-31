'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CatalogItemInputTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
      },
      infoType: {
        type: Sequelize.TEXT,
        field: 'info_type'
      },
      infoFormat: {
        type: Sequelize.TEXT,
        field: 'info_format'
      },
      catalogItemId: {
        type: Sequelize.INTEGER,
        field: 'catalog_item_id',
        references: { model: 'CatalogItems', key: 'id' },
        onDelete: 'cascade'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CatalogItemInputTypes')
  }
}
