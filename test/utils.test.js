import cartData from '../data/cart.js';
import findById, { calcLineItem, calcOrderItem } from '../common/utils.js';
import apparel from '../data/apparel.js';

const test = QUnit.test;
QUnit.module('Utils functions');

test('find by id test', function(assert) {
    const id = '4';
    const expect = { 
        id: '4', 
        name: 'Yellow Raincoat',
        image: 'rainjacket.png',
        description: 'a classic raincoat that will keep even the most rain-avoidant pitty dry',
        price: 17.99 
    };

    const result = findById(id, apparel);
   
    assert.deepEqual(result, expect);
});


test('calculate line items', function(assert) {
    const numberOfItems = '2';
    const itemPrice = 15.99;
    const expect = 31.98;

    const result = calcLineItem(numberOfItems, itemPrice);

    assert.equal(result, expect);
});

test('calculate order item', function(assert) {
   
    const expect = 112.41;

    const result = calcOrderItem(cartData, apparel);

    assert.equal(result, expect);
});



