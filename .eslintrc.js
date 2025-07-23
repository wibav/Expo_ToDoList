module.exports = {
  root: true,
  extends: ['expo', 'eslint:recommended'],
  env: {
    node: true,
  },
  settings: {
    'import/ignore': ['expo-status-bar'],
  },
  rules: {
    'import/namespace': 'off',
  },
};
