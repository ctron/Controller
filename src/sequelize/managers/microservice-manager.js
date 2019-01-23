/*
 * *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

const BaseManager = require('./base-manager');
const models = require('./../models');
const Microservice = models.Microservice;
const MicroservicePort = models.MicroservicePort;
const VolumeMapping = models.VolumeMapping;
const StraceDiagnostics = models.StraceDiagnostics;
const CatalogItem = models.CatalogItem;
const CatalogItemImage = models.CatalogItemImage;
const Fog = models.Fog;
const Flow = models.Flow;
const User = models.User;
const Routing = models.Routing;
const Registry = models.Registry;
const MicroserviceStatus = models.MicroserviceStatus;
const ConnectorPrivateSession = models.ConnectorPrivateSession;
const ConnectorPublicSession = models.ConnectorPublicSession;
const MicroservicePublicMode = models.MicroservicePublicMode;
const Op = require('sequelize').Op;

const microserviceExcludedFields = [
  'configLastUpdated',
  'created_at',
  'updated_at',
  'updatedBy',
  'registryId',
  'isNetwork',
  'rebuild',
  'deleteWithCleanUp',
  'imageSnapshot',
  'catalog_item_id',
  'iofog_uuid'
];

class MicroserviceManager extends BaseManager {
  getEntity() {
    return Microservice
  }

  findAllWithDependencies(where, attributes, transaction) {
    return Microservice.findAll({
      include: [
      {
        model: MicroservicePort,
        as: 'ports',
        required: false,
        attributes: ['portInternal', 'portExternal']
      },
      {
        model: VolumeMapping,
        as: 'volumeMappings',
        required: false,
        attributes: ['hostDestination', 'containerDestination', 'accessMode']
      },
      {
        model: StraceDiagnostics,
        as: 'strace',
        required: false,
        attributes: ['straceRun']
      },
      {
        model: CatalogItem,
        as: 'catalogItem',
        required: true,
        include: [{
          model: CatalogItemImage,
          as: 'images',
          attributes: ['containerImage', 'fogTypeId']
        }],
        attributes: ['picture', 'registryId']
      },
      {
        model: Fog,
        as: 'iofog',
        required: false,
        attributes: ['daemonStatus']
      },
      {
        model: Routing,
        as: 'routes',
        required: false,
        include: [{
          model: Microservice,
          as: 'destMicroservice',
          attributes: ['uuid']
        }],
        attributes: {exclude: ['id', 'source_microservice_uuid',
            'sourceMicroserviceUuid', 'destMicroserviceUuid', 'sourceNetworkMicroserviceUuid',
            'destNetworkMicroserviceUuid', 'sourceIofogUuid', 'destIofogUuid', 'connectorPrivateSessionId']}
      }
      ],
      where: where,
      attributes: attributes
    }, {transaction: transaction})
  }

  findAllActiveFlowSourceRouteMicroservices(iofogUuid, transaction) {
    return Microservice.findAll({
      include: [
        {
          model: Flow,
          as: 'flow',
          required: true,
          attributes: ['isActivated']
        },
        {
          model: Routing,
          as: 'routes',
          required: true,
          include: [
            {
              model: ConnectorPrivateSession,
              as: 'connectorPrivateSession',
              required: true
            }
          ]
        }
      ],
      where: {
        '$flow.is_activated$': true,
        iofogUuid: iofogUuid
      }
    }, {transaction: transaction})
  }

  findAllActiveFlowDestRouteMicroservices(iofogUuid, transaction) {
    return Microservice.findAll({
      include: [
        {
          model: Flow,
          as: 'flow',
          required: true,
          attributes: ['isActivated']
        },
        {
          model: Routing,
          as: 'destRoutes',
          required: true,
          include: [
            {
              model: ConnectorPrivateSession,
              as: 'connectorPrivateSession',
              required: true
            }
          ]
        }
      ],
      where: {
        '$flow.is_activated$': true,
        iofogUuid: iofogUuid
      }
    }, {transaction: transaction})
  }

  findAllActiveFlowPublicModeMicroservices(iofogUuid, transaction) {
    return Microservice.findAll({
      include: [
        {
          model: Flow,
          as: 'flow',
          required: true,
          attributes: ['isActivated']
        },
        {
          model: MicroservicePublicMode,
          as: 'publicModes',
          required: true,
          include: [
            {
              model: ConnectorPublicSession,
              as: 'connectorPublicSession',
              required: true
            }
          ]
        }
      ],
      where: {
        '$flow.is_activated$': true,
        iofogUuid: iofogUuid
      }
    }, {transaction: transaction})
  }

  findAllActiveFlowMicroservices(iofogUuid, transaction) {
    return Microservice.findAll({
      include: [
        {
          model: MicroservicePort,
          as: 'ports',
          required: false,
          attributes: ['portInternal', 'portExternal']
        },
        {
          model: VolumeMapping,
          as: 'volumeMappings',
          required: false,
          attributes: ['hostDestination', 'containerDestination', 'accessMode']
        },
        {
          model: CatalogItem,
          as: 'catalogItem',
          required: true,
          include: [
            {
              model: CatalogItemImage,
              as: 'images',
              required: true,
              attributes: ['containerImage', 'fogTypeId']
            },
            {
              model: Registry,
              as: 'registry',
              required: true,
              attributes: ['url']
            }
          ],
          attributes: ['picture', 'category']
        },
        {
          model: Flow,
          as: 'flow',
          required: false,
          attributes: ['isActivated']
        }
      ],
      where: {
        iofogUuid: iofogUuid,
        [Op.or]:
          [
            {
              '$flow.is_activated$': true
            },
            {
              '$catalogItem.category$':  {[Op.eq]: 'SYSTEM'},
              '$catalogItem.id$': {[Op.ne]: 1}
            }
          ]

      }
    }, {transaction: transaction})
  }

  findOneWithDependencies(where, attributes, transaction) {
    return Microservice.findOne({
      include: [
      {
        model: MicroservicePort,
        as: 'ports',
        required: false,
        attributes: ['portInternal', 'portExternal']
      },
      {
        model: VolumeMapping,
        as: 'volumeMappings',
        required: false,
        attributes: ['hostDestination', 'containerDestination', 'accessMode']
      },
      {
        model: StraceDiagnostics,
        as: 'strace',
        required: false,
        attributes: ['straceRun']
      },
      {
        model: CatalogItem,
        as: 'catalogItem',
        required: false,
        include: [{
          model: CatalogItemImage,
          as: 'images',
          attributes: ['containerImage', 'fogTypeId']
          }],
        attributes: ['picture', 'registryId']
      },
      {
        model: Fog,
        as: 'iofog',
        required: false,
        attributes: ['daemonStatus']
      },
      {
        model: Routing,
        as: 'routes',
        required: false,
        include: [{
          model: Microservice,
          as: 'destMicroservice',
          attributes: ['uuid']
        }],
        attributes: {exclude: ['id',
                'sourceMicroserviceUuid', 'destMicroserviceUuid',
                'sourceNetworkMicroserviceUuid', 'destNetworkMicroserviceUuid',
                'sourceIofogUuid', 'destIofogUuid', 'connectorPrivateSessionId']}
      }
      ],
      where: where,
      attributes: attributes
    }, {transaction: transaction})
  }

  findOneWithStatus(where, transaction) {
    return Microservice.findOne({
      include: [
        {
          model: MicroserviceStatus,
          as: 'microserviceStatus',
          required: true
        }
      ],
      where: where
    }, {transaction: transaction})
  }

  findAllWithStatuses(where, transaction) {
    return Microservice.findAll({
      include: [
        {
          model: MicroserviceStatus,
          as: 'microserviceStatus',
          required: true
        }
      ],
      where: where
    }, {transaction: transaction})
  }

  findMicroserviceOnGet(where, transaction) {
    return Microservice.findOne({
      include: [
        {
          model: Flow,
          as: 'flow',
          required: true,
          include: [
            {
              model: User,
              as: 'user',
              required: true,
              attributes: ['id']
            }
          ],
          attributes: ['id']
        }
      ],
      where: where,
      attributes: ['uuid']
    }, {transaction: transaction})
  }

  async findOneExcludeFields(where, transaction) {
    return Microservice.findOne({
      where: where,
      attributes: {
        exclude: microserviceExcludedFields
      }}, {
      transaction: transaction
    });
  }

  async findAllExcludeFields(where, transaction) {
    return Microservice.findAll({
      where: where,
      attributes: {
        exclude: microserviceExcludedFields
      }}, {
      transaction: transaction
    });
  }
}

const instance = new MicroserviceManager();
module.exports = instance;