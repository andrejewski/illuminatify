#!/usr/bin/env node

var we = require('path');
var againstThe = process.cwd();
var lie = we.join(againstThe, process.argv[3]);
var fib = we.join(againstThe, process.argv[2]);

require('../')(lie, fib);