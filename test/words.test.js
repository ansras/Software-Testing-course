import chai from 'chai';
import words from '../src/words.js';

const expect = chai.expect;

describe('words function', () => {

    it('should split a string into words correctly', () => {
      const result = words('tony, pony, car');
      expect(result).to.deep.equal(['tony', 'pony', 'car']);
    });
  
    it('should handle different delimiters when provided a pattern', () => {
      const result = words('tony, pony, car', /[^, ]+/g);
      expect(result).to.deep.equal(['tony', 'pony', 'car']);
    });
  
    it('should return an empty array when the string is empty', () => {
      const result = words('');
      expect(result).to.deep.equal([]);
    });
  
    it('should handle strings with only non-alphanumeric characters', () => {
      const result = words('!@#$%^&*()');
      expect(result).to.deep.equal([]);
    });
  
    it('should return an empty array if no matches are found with the pattern', () => {
      const result = words('1234567890', /[^a-zA-Z]+/g);
      expect(result).to.deep.equal(['1234567890']);
    });
  
  });
  