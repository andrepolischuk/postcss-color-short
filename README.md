# postcss-color-short [![Build Status][travis-image]][travis-url]

  > [PostCSS][postcss] plugin for color shortcuts

  For hexadecimal, rgb and rgba

```css
.hello {
  border-bottom: 1px solid rgb(200);
  background: #20;
  color: #f;
  box-shadow: 0 1px 5px rgba(0, 0.5);
}
```

```css
.hello {
  border-bottom: 1px solid rgb(200, 200, 200);
  background: #202020;
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}
```

## Install

```sh
npm install --save postcss-color-short
```

## Usage

```js
postcss([require('postcss-color-short')]);
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/postcss-color-short
[travis-image]: https://travis-ci.org/andrepolischuk/postcss-color-short.svg?branch=master

[postcss]: https://github.com/postcss/postcss
