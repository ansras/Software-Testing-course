import chai from 'chai';
import filter from '../src/filter.js';

const expect = chai.expect;


describe('filter function', () => {
    it('Should filter elements based on the predicate condition', () => {
      const users = [
        { user: 'barney', active: true },
        { user: 'fred', active: false },
      ];
      const result = filter(users, ({ active }) => active);
      expect(result).to.deep.equal([{ user: 'barney', active: true }]);
    });

    it('Should return an empty array if no elements match the predicate', () => {
      const nums = [1, 2, 3, 4];
      const result = filter(nums, (num) => num > 5);
      expect(result).to.deep.equal([[]]);
    });

    it('Should handle an empty array', () => {
      const result = filter([], (num) => num > 0);
      expect(result).to.deep.equal([[]]);
    });

    it('Should return an empty array for null input', () => {
      expect(filter(null, (num) => num > 0)).to.deep.equal([[]]);
    });

    it('Should pass index and array to the predicate function', () => {
      const array = [10, 20, 30];
      const indices = [];
      const values = [];
      filter(array, (value, index, arr) => {
        indices.push(index);
        values.push(value);
        return arr[index] === value;
      });
      expect(indices).to.deep.equal([0, 1, 2]);
      expect(values).to.deep.equal([10, 20, 30]);
    });
    
})

