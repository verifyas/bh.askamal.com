// Uncomment if using ES2016 and running into
// issues
// require("@babel/polyfill");

import { CountUp } from './countup.js';
window.CountUp = CountUp;
window.ClipboardJS = require('clipboard');

window.Hammer = require('hammerjs');