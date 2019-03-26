/*
 *  *******************************************************************************
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

const connectorCreate = {
  'id': '/connectorCreate',
  'type': 'object',
  'properties': {
    'name': {'type': 'string', 'minLength': 1},
    'domain': {'type': 'string', 'minLength': 4},
    'publicIp': {'type': 'string', 'minLength': 7},
    'caCert': {'type': 'string'},
    'serverCert': {'type': 'string'},
    'isSelfSignedCert': {'type': 'boolean'},
    'devMode': {'type': 'boolean'},
    'keystorePassword': {'type': 'string'},
    'port': {'type': 'integer'},
    'user': {'type': 'string'},
    'userPassword': {'type': 'string'},
    'token': {'type': 'string'},
  },
  'required': ['publicIp', 'name', 'port', 'user', 'userPassword', 'token'],
  'additionalProperties': false,
}

const connectorUpdate = {
  'id': '/connectorUpdate',
  'type': 'object',
  'properties': {
    'name': {'type': 'string', 'minLength': 1},
    'domain': {'type': 'string', 'minLength': 4},
    'publicIp': {'type': 'string', 'minLength': 7},
    'caCert': {'type': 'string'},
    'serverCert': {'type': 'string'},
    'isSelfSignedCert': {'type': 'boolean'},
    'devMode': {'type': 'boolean'},
    'keystorePassword': {'type': 'string'},
    'port': {'type': 'integer'},
    'user': {'type': 'string'},
    'userPassword': {'type': 'string'},
    'token': {'type': 'string'},
  },
  'required': ['name'],
  'additionalProperties': false,
}

const connectorDelete = {
  'id': '/connectorDelete',
  'type': 'object',
  'properties': {
    'name': {'type': 'string', 'minLength': 1},
  },
  'required': ['name'],
  'additionalProperties': false,
}

module.exports = {
  mainSchemas: [connectorCreate, connectorUpdate, connectorDelete],
  innerSchemas: [],
}
