const _= require('lodash');

const packageThree = (array) => _.reduce(array, (acc, number) => acc + number);

module.exports = packageThree;
