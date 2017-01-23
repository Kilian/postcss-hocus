const postcss = require('postcss');
const selectorParser = require('postcss-selector-parser');

module.exports = postcss.plugin('postcss-hocus', (opts = {}) => css => {
  css.walkRules(rule => {
    rule.selector = selectorParser(selectors => {
      selectors.walk(node => {
        const key = node.value;

        if ([ ':hocus', ':pocus' ].includes(key)) {
          const parent = node.parent;
          const list = parent.parent;
          const index = list.nodes.indexOf(parent) + 1;

          node.value = ':focus';
          list.nodes.splice(index, 0, parent.clone());

          if (key === ':pocus') {
            node.value = ':active';
            list.nodes.splice(index, 0, parent.clone());
          }

          node.value = ':hover';
        }
      });
    }).process(rule.selector).result;
  });
});
