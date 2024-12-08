import chai from 'chai';
import eq from '../src/eq.js';

const expect = chai.expect;

describe('eq function', () => {

  it('should return true for identical string values', () => {
    expect(eq('hello', 'hello')).to.be.true;
  });

  it('should return false for different string values', () => {
    expect(eq('hello', 'world')).to.be.false;
  });

  it('should return true for identical integers', () => {
    expect(eq(10, 10)).to.be.true;
  });

  it('should return false for different integers', () => {
    expect(eq(10, 20)).to.be.false;
  });  

  it('should return false when comparing integer with NaN', () => {
    expect(eq(10, NaN)).to.be.false;
  });
});