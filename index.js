import postcss from 'postcss';

const shortRegExps = [
  /(#)([0-9ABCDEF]{1,2})(\b)/gi,
  /(rgba?\()(\d{1,3})(,?\s?[0-9\.]*\))/gi
];

function transformColor(exp, value) {
  return value.replace(exp, (str, prefix, match, postfix) => {
    const joiner = prefix === '#' ? '' : ', ';
    return `${prefix}${match}${joiner}${match}${joiner}${match}${postfix}`;
  });
}

function transformDecl(decl) {
  shortRegExps.forEach(exp => {
    /* eslint-disable no-param-reassign */
    if (exp.test(decl.value)) decl.value = transformColor(exp, decl.value);
  });
}

export default postcss.plugin('postcss-color-short', () => style => {
  style.walkDecls(transformDecl);
});
