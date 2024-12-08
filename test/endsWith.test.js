import chai from 'chai';
import endsWith from '../src/endsWith.js';

const expect = chai.expect;

describe('endsWith', () => {
  it('Should return true if the string ends with the target', () => {
    expect(endsWith('abc', 'c')).to.be.true;
  });

  it('Should return false if the string does not end with the target', () => {
    expect(endsWith('abc', 'b')).to.be.false;
  });

  it('Should return true if the string ends with the target up to the specified position', () => {
    expect(endsWith('abc', 'b', 2)).to.be.true;
  });

  it('Should return false if the target length exceeds the specified position', () => {
    expect(endsWith('abc', 'abc', 2)).to.be.false;
  });

  it('Should handle empty string inputs', () => {
    expect(endsWith('', 'a')).to.be.false;
    expect(endsWith('', '')).to.be.true;
  });

  it('Should return true for empty target string', () => {
    expect(endsWith('abc', '')).to.be.true;
  });

  it('Should handle position greater than string length', () => {
    expect(endsWith('abc', 'c', 10)).to.be.true;
  });

  it('Should handle negative positions as zero', () => {
    expect(endsWith('abc', 'a', -1)).to.be.false;
  });

  it('Should handle non-string inputs gracefully', () => {
    expect(endsWith(12345, '5')).to.be.true;
    expect(endsWith(12345, '45')).to.be.true;
    expect(endsWith(12345, '6')).to.be.false;
  });

  it('Should return false for NaN as position', () => {
    expect(endsWith('abc', 'a', NaN)).to.be.false;
  });

  it('Should return true for undefined position if the string ends with the target', () => {
    expect(endsWith('abc', 'c', undefined)).to.be.true;
  });
});