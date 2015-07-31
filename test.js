import colorShort from './index';
import postcss from 'postcss';
import assert from 'assert';

it('should return original hex', (done) => {
  verify('a { background: #202020; color: #fff; }', 'a { background: #202020; color: #fff; }', done);
});

it('should return original rgb', (done) => {
  verify('a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }', 'a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }', done);
});

it('should replace hex', (done) => {
  verify('a { background: #20; color: #f; }', 'a { background: #202020; color: #fff; }', done);
});

it('should replace rgb', (done) => {
  verify('a { background: rgb(0); color: rgba(255, 0.8); }', 'a { background: rgb(0, 0, 0); color: rgba(255, 255, 255, 0.8); }', done);
});

function verify(input, out, done) {
  postcss([colorShort])
    .process(input)
    .then(res => {
      assert(res.warnings().length === 0);
      assert(res.css === out);
      done();
    })
    .catch(err => {
      done(err);
    });
}
