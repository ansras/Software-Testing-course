import chai from 'chai';
import capitalize from '../src/capitalize.js';

const expect = chai.expect;

describe('capitalize function', () => {
    it('Should capitalize a single uppercase word', () => {
      expect(capitalize('FRED')).to.equal('Fred');
    });
  
    it('Should capitalize a single lowercase word', () => {
      expect(capitalize('fred')).to.equal('Fred');
    });
  
    it('Should handle strings with non-alphabetic characters', () => {
      expect(capitalize('123abc')).to.equal('123abc');
      expect(capitalize('123ABC')).to.equal('123abc');
    });
  
    it('Should handle strings with special characters', () => {
      expect(capitalize('@fred')).to.equal('@fred');
    });
  
    it('Should handle non-string inputs', () => {
      expect(capitalize(123)).to.equal('123');
      expect(capitalize(true)).to.equal('True');
    });
  });