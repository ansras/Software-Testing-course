import chai from 'chai';
import add from '../src/add.js';

const expect = chai.expect;

describe('add function', () => {
    it('Should return the sum of two positive numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('Should handle addition with negative numbers', () => {
      expect(add(-2, 3)).to.equal(1);
      expect(add(-2, -3)).to.equal(-5);
    });

    it('Should return the number itself when adding zero', () => {
      expect(add(5, 0)).to.equal(5);
      expect(add(0, 5)).to.equal(5);
    });

    it('Should handle default values correctly', () => {
      expect(add(5)).to.equal(5);
      expect(add()).to.equal(0);
    });
})


