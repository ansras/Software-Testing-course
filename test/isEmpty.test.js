import chai from 'chai';
import isEmpty from '../src/isEmpty.js';

const expect = chai.expect;

describe('isEmpty function', () => {

    it('should return true for null', () => {
      expect(isEmpty(null)).to.be.true;
    });
  
    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).to.be.true;
    });
  
    it('should return true for empty array', () => {
      expect(isEmpty([])).to.be.true;
    });
  
    it('should return true for empty string', () => {
      expect(isEmpty('')).to.be.true;
    });
  
    it('should return false for non-empty arrays', () => {
      expect(isEmpty([1, 2, 3])).to.be.false;
    });
  
    it('should return false for non-empty strings', () => {
      expect(isEmpty('abc')).to.be.false;
    });
  
    it('should return true for an empty map', () => {
      expect(isEmpty(new Map())).to.be.true;
    });
  
    it('should return false for a non-empty map', () => {
      const map = new Map();
      map.set('key', 1);
      expect(isEmpty(map)).to.be.false;
    });

    it('should return true for an empty set', () => {
      expect(isEmpty(new Set())).to.be.true;
    });
  
    it('should return false for a non-empty set', () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).to.be.false;
    });
  
    it('should return true for empty object', () => {
      expect(isEmpty({})).to.be.true;
    });
  
    it('should return false for non-empty object', () => {
      expect(isEmpty({ a: 1 })).to.be.false;
    }); 
  });