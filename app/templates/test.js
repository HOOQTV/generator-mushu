import test from 'ava';
import <%= className %> from '../lib';

test('Yay!', async (t) => {
    const instance = new <%= className %>('HOOQ');
    t.deepEqual(await instance.hello(), 'Hello HOOQ');
});
