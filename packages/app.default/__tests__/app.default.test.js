'use strict';

const app.default = require('..');
const assert = require('assert').strict;

assert.strictEqual(app.default(), 'Hello from app.default');
console.info('app.default tests passed');
