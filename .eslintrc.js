module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["promise","prettier"],
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "no-continue": "off",
    "no-await-in-loop": "warn",
    "linebreak-style": ["error", "windows"]
  }
}
