import { expect } from 'chai';
import keys from '../src/keys.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const objectInput = [{name:'Green Apple', category: "fruit"}, {name:'Tomato', category: "vegetable"},
{name:'Banana', category: "fruit"}, {name:'Banana', category: "fruit"}, {name:'Potato', category: "vegetable"}];
const stringInput = 'Green Apple, Tomato, Banana, Potato';
const numberArray = [1, 3, 20, 100, 45, 60];


describe("keys.js", function() {

    it("Should return keys of object", function() {
        expect(keys({name:'Green Apple', category: "fruit"})).to.eql(['name', 'category']);
    });

    it("Should return indexes of array", function() {
        expect(keys(objectInput)).to.eql([ '0', '1', '2', '3', '4' ]);
    });

    it("Should return indexes of string", function() {
        expect(keys("Test")).to.eql([ '0', '1', '2', '3']);
    });

    //Maybe it should throw an error
    it("Should return empty array with number parameter", function() {
        expect(keys(12345)).to.eql([]);
    });
    
  });