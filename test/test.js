'use strict';

var code = require('../thursday-warmup.js');
var expect = require('chai').expect;

describe('Ramp function', function () {
  it('should return true if the number rises or stays the same from left to right', function () {
    expect(code(1234)).to.equal(true)
  });
  it('should return false if one number is lower than the previous number', function () {
    expect(code(4528)).to.equal(false);
  });
})
