'use strict';
// Takes the the array from one and reduces it using three...then doubles it!! Nigh-on nefarious.
const packageOne = require('../../one/lib/one');
const packageThree = require('../../three/lib/three');

const four = () => (packageThree(packageOne)) * 2;
module.exports = four;
