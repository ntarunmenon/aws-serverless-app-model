'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    callback(null, "event.key1");  // Echo back the first key value
    //callback('Something went wrong');
};