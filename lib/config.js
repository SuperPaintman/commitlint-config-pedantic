'use strict';
const fs = require('fs');
const { join } = require('path');
const yaml = require('js-yaml');

module.exports = function config(name) {
  return yaml.safeLoad(
    fs.readFileSync(join(__dirname, '../configs', `${name}.yml`), 'utf8')
  );
};
