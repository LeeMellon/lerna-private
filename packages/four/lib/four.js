'use strict';
const packageOne = require('../../one/lib/one');
const packageThree = require('../../three/lib/three');

const four = () => (packageThree(packageOne)) * 2;
module.exports = four;
