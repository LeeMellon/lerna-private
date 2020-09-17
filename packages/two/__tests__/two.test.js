'use strict';
// hope that number is correct

const packageTwo = require('../../two/lib/two');

test('test-package-one', () => {
  expect(packageTwo).toContain(36);
});
