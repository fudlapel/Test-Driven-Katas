const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if array of numbers is empty', () => {
    expect(twoSum([], 10)).to.have.length(0);
  });
  it('Returns indices of numbers in array that add up to target', () => {
    expect(twoSum([1,2,3], 5)).to.equal([1,2]);
  });
  it('Returns empty array if no two indices add up to target', () => {
    expect(twoSum([1,2,3], 7)).to.equal([]);
  });
});

