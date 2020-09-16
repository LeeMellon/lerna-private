const _= require('lodash');
// don't stare too long our it will melt your mind!!!

const packageThree = (array) => _.reduce(array, (acc, number) => acc + number);

module.exports = packageThree;
