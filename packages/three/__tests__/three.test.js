const packageThree = require('../lib/three');
const packageOne = require('../../one/lib/one');

test('test-package-two', () => {
  expect(packageThree(packageOne)).toEqual(21);
});
