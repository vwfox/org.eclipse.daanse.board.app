/*********************************************************************
 * Copyright (c) YYYY Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Name (Company) - description
 **********************************************************************/


'use strict';

const lib.core = require('..');
const assert = require('assert').strict;

assert.strictEqual(lib.core(), 'Hello from lib.core');
console.info('lib.core tests passed');
