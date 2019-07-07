'use strict';

console.log('Loading function');

var AWS = require("aws-sdk");
AWS.config.update({region: process.env['REGION_NAME']});

const tableName = process.env['TABLE_NAME']
const dynamo = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
const tableName = process.env['TABLE_NAME']
var params = {
  TableName: tableName
}
var resData;
dynamo.scan(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     {
      console.log(data.Items);
      done(null, data.Items)
  }           // successful response
});
};