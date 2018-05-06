var moment = require('moment');

// var date = new Date();
//
// console.log(date.getMonth());

// new Date().getTime()
// same as
// moment().valueOf();

var createdAt = 1234;
var date = moment(createdAt);
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do YYYY HH:mm a'));
