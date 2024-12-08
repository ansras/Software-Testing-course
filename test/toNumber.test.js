import chai from 'chai';
import toNumber from '../src/toNumber.js';

const expect = chai.expect;

describe('toNumber function', () => {

    it('should return a number unchanged', () => {
        expect(toNumber(3.2)).to.equal(3.2);
    });

    it('should return `NaN` for a Symbol', () => {
        const symbol = Symbol('test');
        expect(toNumber(symbol)).to.be.NaN;
    });

    it('should trim whitespace and convert string numbers', () => {
        expect(toNumber('  42  ')).to.equal(42);
    });

    it('should convert binary strings to numbers', () => {
        expect(toNumber('0b1010')).to.equal(10);
    });

    it('should return `NaN` for non-numeric strings', () => {
        expect(toNumber('hello')).to.be.NaN;
    });

    it('should handle `null`', () => {
        expect(toNumber(null)).to.equal(0);
    });

    it('should handle Infinity', () => {
        expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it('should handle empty strings as 0', () => {
        expect(toNumber('')).to.equal(0);
    });

});

