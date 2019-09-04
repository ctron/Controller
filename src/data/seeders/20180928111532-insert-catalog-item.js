'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CatalogItems', [
      {
        name: 'Networking Tool',
        description: 'The built-in networking tool for Eclipse ioFog.',
        category: 'SYSTEM',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'none.png',
        config_example: null,
        is_public: false,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'RESTBlue',
        description: 'REST API for Bluetooth Low Energy layer.',
        category: 'SYSTEM',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'none.png',
        config_example: null,
        is_public: false,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'HAL',
        description: 'REST API for Hardware Abstraction layer.',
        category: 'SYSTEM',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'none.png',
        config_example: null,
        is_public: false,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Diagnostics',
        description: '0',
        category: 'UTILITIES',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/580.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Hello Web Demo',
        description: 'A simple web server to test Eclipse ioFog.',
        category: 'UTILITIES',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/4.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Open Weather Map Data',
        description: 'A stream of data from the Open Weather Map API in JSON format',
        category: 'SENSORS',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/8.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'JSON REST API',
        description: 'A configurable REST API that gives JSON output',
        category: 'UTILITIES',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/49.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Temperature Converter',
        description: 'A simple temperature format converter',
        category: 'UTILITIES',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/58.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'JSON Sub-Select',
        description: 'Performs sub-selection and transform operations on any JSON messages',
        category: 'UTILITIES',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/59.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Humidity Sensor Simulator',
        description: 'Humidity Sensor Simulator for Eclipse ioFog',
        category: 'SIMULATOR',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/simulator.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Seismic Sensor Simulator',
        description: 'Seismic Sensor Simulator for Eclipse ioFog',
        category: 'SIMULATOR',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/simulator.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      },
      {
        name: 'Temperature Sensor Simulator',
        description: 'Temperature Sensor Simulator for Eclipse ioFog',
        category: 'SIMULATOR',
        publisher: 'Eclipse ioFog',
        disk_required: 0,
        ram_required: 0,
        picture: 'images/build/simulator.png',
        config_example: null,
        is_public: true,
        registry_id: 1,
        user_id: null
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CatalogItems', null, {})
  }
}
