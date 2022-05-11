module.exports = {
  singleQuote: true,
  importOrderSeparation: true,
  importOrder: [
    'react-app-polyfill/stable',
    '<THIRD_PARTY_MODULES>',
    '.css$',
    '^[.].*(?<!testUtils)$',
    'testUtils',
  ],
};
