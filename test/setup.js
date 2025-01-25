import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import _ from 'underscore';

const localStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key, value) {
    delete this[key];
  },
};

global._ = _;
global.__dragify_VERSION__ = '';
global.dragifyjs = require('./../src').default;
global.$ = global.dragifyjs.$;
global.localStorage = localStorage;
