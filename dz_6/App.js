//1Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("removeSmallest", function() {
    it("works for the examples", function() {
        assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
        assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
        assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
        assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
    });

    it("returns [] if the list has only one element", function() {
        for (let i = 0; i < 10; ++i) {
            let x = ~~(Math.random() * 400);
            assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
        }
    });

    function randomArray(length) {
        return Array.from({length: length}, () => ~~(Math.random() * 400));
    }

    it("returns a list that misses only one element", function() {
        for(let i = 0; i < 10; ++i) {
            let arr = randomArray(~~(Math.random() * 10) + 1);
            let l = arr.length;
            assert.strictEqual(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
        }
    });
});
 //2Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
//
// Give your answer as a string matching "odd" or "even".
//
// If the input array is empty consider it as: [0] (array with a zero).
//
// Examples:
// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed tests', () => {
    it('Edge tests', () => {
        assert.strictEqual(oddOrEven([0]), 'even');
        assert.strictEqual(oddOrEven([1]), 'odd');
        assert.strictEqual(oddOrEven([]), 'even');
    });

    it('Even tests', () => {
        assert.strictEqual(oddOrEven([0, 1, 5]), 'even');
        assert.strictEqual(oddOrEven([0, 1, 3]), 'even');
        assert.strictEqual(oddOrEven([1023, 1, 2]), 'even');
    });

    it('Negative Even tests', () => {
        assert.strictEqual(oddOrEven([0, -1, -5]), 'even');
        assert.strictEqual(oddOrEven([0, -1, -3]), 'even');
        assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even');
    });

    it('Odd tests', () => {
        assert.strictEqual(oddOrEven([0, 1, 2]), 'odd');
        assert.strictEqual(oddOrEven([0, 1, 4]), 'odd');
        assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd');
    });

    it('Negative Odd tests', () => {
        assert.strictEqual(oddOrEven([0, -1, 2]), 'odd');
        assert.strictEqual(oddOrEven([0, 1, -4]), 'odd');
        assert.strictEqual(oddOrEven([-1653 -1, 3]), 'odd');
    });
});
