'use strict';
const CustomLabel = require('../strategies/type-strategies/customlabel-type-strategy');
const Standard = require('../strategies/type-strategies/standard-type-strategy');

const classes = [
  CustomLabel
];

module.exports = (type) => {
  if(!!classes[type]) {
    return new classes[type](type);
  }

  return new Standard(type);
};