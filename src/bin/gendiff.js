#! /usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .description('Usage: gendiff [options]')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);

if (!program.args.length) program.help();
