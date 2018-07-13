const assert = require('assert');
const removeY = require('../lib/app');

it('Removes y', () => {
    const array = ['sky', 'hot', 'yeti', 'green'];
    assert.equal(removeY(array), ['Is it hot?, Is it green?']);
});