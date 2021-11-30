import { expect } from 'chai';
import filter from '../src/filter.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const stringInput = 'Green Apple, Tomato, Banana, Potato';

describe("filter.js", function() {
    it("Should select bananas", function() {
        expect(filter(input, (product) => product == 'Banana')).to.eql(['Banana', 'Banana']);
    });

    it("Should exclude bananas", function() {
        expect(filter(input, (product) => product != 'Banana')).to.eql(['Green Apple', 'Tomato', 'Potato']);
    });

    it("Should filter letters from string", function() {
        expect(filter(stringInput, (product) => product == 'o')).to.eql(['o', 'o','o', 'o']);
    });

    //Maybe it should be throwing an error instead? Filter doesn't use isArrayLike
    it("Should return empty array if not array", function() {
        expect(filter(12345, (product) => product == 12345)).to.eql([[]]);
    });
    

  });