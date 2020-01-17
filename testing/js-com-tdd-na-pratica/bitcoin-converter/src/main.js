#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./convertBTC');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-C', '--currency <currency>', 'Currency to be converted. (Default: USD')
  .option('-C', '--amount <amount>', 'Value in Bitcoin to convert. (Default: USD')
  .parse(process.argv)

convertBTC(program.currency, program.amount);
