import findById from '../common/utils.js';
import cartData from '../data/cart.js';
import {calcLineItem} from '../common/utils.js';

const test = QUnit.test;

test('find by id test', function(assert) {
    const id = '4';
    const expect = cartData[1];
    const result = findById(id, cartData);
   
    assert.equal(result, expect);
});


test('calculate line items', function(assert) {
    const numberOfItems = '2';
    const itemPrice = 15.99;
    const expect = 31.98;

    const result = calcLineItem(numberOfItems, itemPrice);



    assert.equal(result, expect);
});

