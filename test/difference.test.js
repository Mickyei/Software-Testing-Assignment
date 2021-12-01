import { expect } from 'chai';
import difference from '../src/difference.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const stringInput = 'Green Apple, Tomato, Banana, Potato';

describe("difference.js", function() {

    it("Should return array without any 'Banana' or 'Tomato' strings", function() {
        expect(difference(input, ['Banana', 'Tomato'])).to.eql(['Green Apple',  'Potato']);
    });


    it("Should return array without specified numbers", function() {
        expect(difference([0, 1, 2, 3], [0, 1])).to.eql([2,  3]);
    });

    //Maybe it should throw an error instead?
    it("Should return empty array if parameter is non-array", function() {
        expect(difference(1, [0, 1])).to.eql([]);
    });

    //filter.js works with a string as an array
    it("Should return empty array with string parameter", function() {
        expect(difference('GreAen Apbple', ['A', 'b'])).to.eql([]);
    });
    
  });