const assert = require('assert');
const removeY = require('../test/app');

it('Removes y', () => {
    const array = ['sky', 'hot', 'yeti', 'green'];
    assert.deepEqual(removeY(array), ['Is it hot?, Is it green?']);
});