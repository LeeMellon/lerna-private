'use strict';

const packageOne = require('../../one/lib/one');

test('test-package-one', () => {
  expect(packageOne).toContain(6);
});
