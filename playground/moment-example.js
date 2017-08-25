var moment=require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1503656506;
var currentMoment = moment.unix(timestamp);
console.log('currently: ', currentMoment.format('MMM D, YYYY @ H:mm'));

// january 3rd, 2017 @ 12:13 AM
console.log('currently: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));