module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['BurgerToggle'],
        depth: 3,
      },
    ],
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
};
