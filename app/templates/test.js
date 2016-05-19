import test from 'ava';
import <%= className %> from '../lib';
import { <%= className %>Error } from '../lib';

test('Yay!', async (t) => {
    const instance = new <%= className %>('HOOQ');
    t.deepEqual(await instance.hello(), 'Hello HOOQ');
});

test('Nay!', async (t) => {
    const err = new <%= className %>Error('Nay!', 500, 'Dragon');
    t.true(err instanceof Error);
    t.true(err instanceof <%= className %>Error);
    t.deepEqual(err.code, 500);
    t.deepEqual(err.message, 'Nay! (500 of Dragon)');
});
