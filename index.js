import postcss from 'postcss';

const shortRegExps = [
  /(#)([0-9ABCDEF]{1,2})(\b)/gi,
  /(rgba?\()(\d{1,3})(,?\s?[0-9\.]*\))/gi
];

export default postcss.plugin('postcss-color-short', () => {
  return style => {
    style.walkDecls(transformDecl);
  };
});

function transformDecl(decl) {
  shortRegExps.forEach(exp => {
    if (exp.test(decl.value)) decl.value = transformColor(exp, decl.value);
  });
}

function transformColor(exp, value) {
  return value.replace(exp, (str, prefix, match, postfix) => {
    const middle = [match, match, match];
    const joiner = prefix === '#' ? '' : ', ';
    return prefix + middle.join(joiner) + postfix;
  });
}
