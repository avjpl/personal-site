require('babel-core/register');
require('babel-polyfill');

global.sinon = require('sinon');
global.expect = require('chai').expect;
global.proxyquire = require('proxyquire').noCallThru();
