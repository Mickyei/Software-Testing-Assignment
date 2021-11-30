import { expect } from 'chai';
import reduce from '../src/reduce.js';

const input = ['Green Apple', 'Tomato', 'Banana', 'Banana', 'Potato'];
const objectInput = [{name:'Green Apple', category: "fruit"}, {name:'Tomato', category: "vegetable"},
{name:'Banana', category: "fruit"}, {name:'Banana', category: "fruit"}, {name:'Potato', category: "vegetable"}];
const stringInput = 'Green Apple, Tomato, Banana, Potato';
const numberArray = [1, 3, 20, 100, 45, 60];

describe("reduce.js", function() {

    it("Should calculate cumulative sum", function() {
        expect(reduce(numberArray, (sum, n) => sum + n, 0)).to.eql(229);
    });

    it("Should return array of vegetables", function() {
        expect(reduce(objectInput, (result, n) => {
            if(n.category === 'vegetable') {      
                result.push(n);          
                return result;
            }
            return result;
        }, [])).to.eql([{name:'Tomato', category: "vegetable"}, {name:'Potato', category: "vegetable"}]);
    });


    it("Should reduce with a string parameter", function() {
        expect(reduce("World", (sum, n) => sum + n, "Hello ")).to.eql('Hello World');
    });

    //It doesn't add 100 to 50. Myabe it's and error
    it("Should reduce with a number parameter", function() {
        expect(reduce(100, (sum, n) => sum + n, 50)).to.equal(150);
    });

    
  });