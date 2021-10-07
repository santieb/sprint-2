const assert = require('assert');
const isPrime = require('../Semana 6 _ Testing/challenge2')

let number = 2;

describe('Challenge', function() {
    it(`number ${number} is prime`, function() {
      assert.equal(isPrime(number), true);
  });
});