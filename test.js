import test from 'ava';
import postcss from 'postcss';
import colorShort from './index';

const transform = input => postcss([ colorShort ]).process(input);

test('return original hex', async t => {
  const res = await transform('a { background: #202020; color: #fff; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { background: #202020; color: #fff; }');
});

test('return original rgb', async t => {
  const res = await transform('a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }');
});

test('should replace hex', async t => {
  const res = await transform('a { background: #20; color: #f; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { background: #202020; color: #fff; }');
});

test('should replace rgb', async t => {
  const res = await transform('a { background: rgb(0); color: rgba(255, 0.8); }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }');
});
