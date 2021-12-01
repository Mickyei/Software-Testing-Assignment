import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe("capitalize.js", function() {

    it("Should return capitalized lowercase string", function() {
        expect(capitalize("green apple")).to.eql('Green apple');
    });

    it("Should return capitalize uppercase string", function() {
        expect(capitalize("GREEN APPLE")).to.eql('Green apple');
    });


    it("Should do nothing when given a number", function() {
        expect(capitalize(12345)).to.eql(12345);
    });

    //It also includes the ',' is this intentional?
    it("Should combine array of strings and capitalize first letter", function() {
        expect(capitalize(['green', 'apple'])).to.eql('Green, apple');
    });
  });