import { expect } from 'chai';
import add from '../src/add.js';

describe("add.js", function() {
    it("Adds two positive numbers", function() {
        expect(add(10,10)).to.equal(20);
    });

    it("Adds two negative numbers", function() {
        expect(add(-10,-10)).to.equal(-20);
    });

    it("Adds a negative to a positive number", function() {
        expect(add(10,-10)).to.equal(0);
    });

    it("Adds a positive number to a negative number", function() {
        expect(add(-10,10)).to.equal(0);
    });
    
    //add.js doesn't test for faulty input
    it("Should combine number to string", function() {
        expect(add(10,"Test")).to.eql('10Test');
    });

    //add.js doesn't test for faulty input
    it("Should equal NaN when given an array", function() {
        expect(add(10,[1, 2, 3])).to.eql(NaN);
    });


  });