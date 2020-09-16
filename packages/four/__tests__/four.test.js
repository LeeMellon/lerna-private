'use strict';
const packageOne = require('../../one/lib/one')
const packageThree = require('../../three/lib/three')
const packageFour = require('../lib/four');

test('test-package-four', () => {
  expect(packageFour()).toEqual(packageThree(packageOne) * 2);
});
