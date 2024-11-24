import chai from 'chai';
import castArray from '../src/castArray.js';

const expect = chai.expect;

describe('castArray function', () => {

    it('should cast a number in an array', () => {
        const result = castArray(1);
        expect(result).to.deep.equal([1]);
    });

    it('should cast an object in an array', () => {
        const obj = { a: 1 };
        const result = castArray(obj);
        expect(result).to.deep.equal([obj]);
    });

    it('should cast a string in an array', () => {
        const result = castArray('abc');
        expect(result).to.deep.equal(['abc']);
    });

    it('should cast `null` in an array', () => {
        const result = castArray(null);
        expect(result).to.deep.equal([null]);
    });

    it('should return the same array if the input is already an array', () => {
        const array = [1, 2, 3];
        const result = castArray(array);
        expect(result).to.equal(array);
    });

});