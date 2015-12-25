# postcss-color-short [![Build Status][travis-image]][travis-url]

> [PostCSS][postcss] plugin for color shortcuts

For hexadecimal, rgb and rgba

```css
/* before */

.hello {
  border-bottom: 1px solid rgb(200);
  background: #20;
  color: #f;
  box-shadow: 0 1px 5px rgba(0, 0.5);
}

/* after */

.hello {
  border-bottom: 1px solid rgb(200, 200, 200);
  background: #202020;
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}
```

## Install

```sh
npm install --save-dev postcss-color-short
```

## Usage

### PostCSS

```js
var fs = require('fs');
var postcss = require('postcss');
var colorShort = require('postcss-color-short');
var css = fs.readFileSync('input.css', 'utf8');

var output = postcss([colorShort])
  .process(css)
  .css;
```

### Gulp

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var colorShort = require('postcss-color-short');

gulp.task('css', function () {
  return gulp.src('./src')
    .pipe(postcss([
      colorShort
    ]))
    .pipe(gulp.dest('./dist'));
});
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/postcss-color-short
[travis-image]: https://travis-ci.org/andrepolischuk/postcss-color-short.svg?branch=master

[postcss]: https://github.com/postcss/postcss
