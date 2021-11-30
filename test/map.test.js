import { expect } from 'chai';
import map from '../src/map.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const objectInput = [{name:'Green Apple', category: "fruit", price: 100}, {name:'Tomato', category: "vegetable", price: 30},
{name:'Banana', category: "fruit", price: 5}, {name:'Banana', category: "fruit", price: 5}, {name:'Potato', category: "vegetable", price: 40}];
const objectsDiscount = [{name:'Green Apple', category: "fruit", price: 60}, {name:'Tomato', category: "vegetable", price: 18},
{name:'Banana', category: "fruit", price: 3}, {name:'Banana', category: "fruit", price: 3}, {name:'Potato', category: "vegetable", price: 24}];
const stringInput = 'Green Apple, Tomato, Banana, Potato';

function discount(product) {
    product.price = product.price * 0.6;
    return product;
}
function makeUpperCase(letter) {
    letter = letter.toUpperCase();
    return letter;
}
describe("map.js", function() {

    it("Should apply a 40% discount to products in array", function() {
        expect(map(objectInput, discount)).to.eql(objectsDiscount);
    });

    it("Should create an array of uppercase letters", function() {
        expect(map('green apple', makeUpperCase)).to.eql(['G','R','E','E','N',' ','A','P','P','L','E']);
    });

    //Maybe it should be throwing an error
    it("Should return array with undefined as it's only item", function() {
        expect(map(1000, discount)).to.eql([undefined]);
    });

    
  });