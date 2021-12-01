import { expect } from 'chai';
import toString from '../src/toString.js';

describe("toString.js", function() {

    it("Should return string from a number", function() {
        expect(toString(15)).to.eql('15');
    });

    it("Should return string with string parameter", function() {
        expect(toString('Steak')).to.eql('Steak');
    });

    it("Should return string when given array parameter", function() {
        expect(toString([1,2,3])).to.eql('1,2,3');
    });
    //[object Object] is JavaScripts default conversion from object to string
    it("Should return [object Object] with object parameter", function() {
        const result = toString({name: 'Steak', category: 'meat'});
        console.log(result);
        expect(toString({name: 'Steak', category: 'meat'})).to.eql("[object Object]");
    });

  });