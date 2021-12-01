import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe("toNumber.js", function() {

    it("Should return number", function() {
        expect(toNumber('15')).to.eql(15);
    });

    it("Should return NaN with non-number string parameter", function() {
        expect(toNumber('Number12')).to.eql(NaN);
    });

    it("Should return NaN with array parameter", function() {
        expect(toNumber([1,2])).to.eql(NaN);
    });

  });