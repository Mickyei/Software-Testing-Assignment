import { expect } from 'chai';
import words from '../src/words.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const stringInput = 'Green Apple, Tomato, Banana, Potato';

describe("words.js", function() {

    it("Should return array of words", function() {
        expect(words(stringInput)).to.eql(['Green' ,'Apple', 'Tomato', 'Banana', 'Potato']);
    });

    it("Should throw an error for array parameter", function() {
        expect(function() {words(input);}).to.throw();  
    });

    it("Should return string matching the pattern", function() {
        expect(words(stringInput, 'Green Apple')).to.eql(['Green Apple']);
    });

    
  });