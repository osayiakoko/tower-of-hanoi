
const index = require('./index')
const assert = require('assert')

assert.strictEqual(index.towerHanoi(3), 7)
assert.strictEqual(index.towerHanoi(5), 31)
assert.strictEqual(index.towerHanoi(0), 0)
