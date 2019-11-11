const { peerDependencies } = require('./package.json');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['off'],
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies) }]
  }
};
