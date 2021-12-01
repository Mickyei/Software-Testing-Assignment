import { expect } from 'chai';
import add from '../src/add.js';
import reduce from '../src/reduce.js';
import difference from '../src/difference.js';
import keys from '../src/keys.js';
import map from '../src/map.js';
import words from '../src/words.js';
import filter from '../src/filter.js';
import isArrayLike from '../src/isArrayLike.js';

const input = ['Green Apple', 'Blue Tomato', 'Green Banana', 'Blue Banana', 'Black Potato'];
const searchInput = 'Blue Apple';
const numberArray = [1, 3, 20, 100, 45, 60];

describe("integration tests", function() {
    //Did not implement testing for excluding words because regex is hard
    it("filter, words and difference integration", function() {
        const searchWords = words(searchInput);
        const results = filter(input, product => {
            const productWords = words(product);
            for (const searchWord of searchWords) {
                for (const productWord of productWords) {
                    if(productWord === searchWord) {
                        return product;
                    }
                }
            }
        });
        expect(results).to.eql([ 'Green Apple', 'Blue Tomato', 'Blue Banana' ]);
    });

    it("reduce and add integration", function() {
        expect(reduce(numberArray, (sum, n) => add(sum,n), 0)).to.eql(229);
    });

    it("keys and words integration", function() {
        const productInfo = "Banana, vegetable";
        const productObject = {name: null, category: null};
        const productKeys = keys(productObject);
        const productWords = words(productInfo);
        const result = productKeys[0] + ": " + productWords[0]+ " " + productKeys[1] + ": " + productWords[1]
        expect(result).to.eql("name: Banana category: vegetable");
    });

    it("keys and isArrayLike integration", function() {
        const productObject = {name: null, category: null};
        const productKeys = keys(productObject);
        expect(isArrayLike(productKeys)).to.eql(true);
    });

  });

