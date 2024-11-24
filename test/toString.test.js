import chai from 'chai';
import toString from '../src/toString.js';

const expect = chai.expect;

describe('toString function', () => {

    
    it('should convert a number to a string', () => {
        const result = toString(42);
        expect(result).to.equal('42');
    });

    it('should preserve the sign of -0', () => {
        const result = toString(-0);
        expect(result).to.equal('-0');
    });

    it('should convert an array to a string', () => {
        const result = toString([1, 2, 3]);
        expect(result).to.equal('1,2,3');
    });

    it('should convert an object to its string representation', () => {
        const obj = { a: 1 };
        const result = toString(obj);
        expect(result).to.equal('[object Object]');
    });

    it('should handle strings without modification', () => {
        const str = 'string';
        const result = toString(str);
        expect(result).to.equal(str);
    });


});