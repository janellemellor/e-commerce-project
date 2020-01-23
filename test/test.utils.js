import findById from '../common/utils.js';
import cartData from '../data/cart.js';


const test = QUnit.test;

test('find by id test', function(assert) {
    const id = '4';
    const expect = cartData[1];
    
    const result = findById(id, cartData);
   
    assert.equal(result, expect);
});


