'use strict';

const lib.core = require('..');
const assert = require('assert').strict;

assert.strictEqual(lib.core(), 'Hello from lib.core');
console.info('lib.core tests passed');
