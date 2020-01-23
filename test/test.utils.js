import findById from '../common/utils';
import apparel from '../data/apparel';


const test = QUnit.test;

test('find by id test', function(assert) {
    
    const expect = findById('2', 'hoodie');
    
    const result = findById('2', apparel);
   
    assert.equal(result, expect);
});


