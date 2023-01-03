const plugin = require('tailwindcss/plugin');

module.exports = {
  // mode: 'jit',
  purge: { content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: '0',
        '1/5': '20%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
      },
      maxWidth: {
        '2/3': '66.666%',
        '4/5': '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
