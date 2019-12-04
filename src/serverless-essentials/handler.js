"use strict";
import { DynamoDB } from "aws-sdk";
const db = new DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
//const uuid = require("uuid/v4");

const userTable = process.env.USER_TABLE;

const ContentTable = process.env.CONTENT_TABLE;
// create a response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}
// sorts by date
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else {
    return 1;
  }
}
// // create a user
// module.exports.createUser = (event, context, callback) => {
//   const reqBody = JSON.parse(event.body);

//   const user = {
//     id: uuid(),
//     createdAt: new Date().toISOString(),
//     title: reqBody.title,
//     body: reqBody.body
//   };

//   return db
//     .put({
//       TableName: userTable,
//       Item: user
//     })
//     .promise()
//     .then(() => {
//       callback(null, response(201, user));
//     })
//     .catch(err => response(null, response(err.statusCode, err)));
// };

// // get all users

// module.exports.getAllUsers = (event, context, callback) => {
//   return db
//     .scan({
//       TableName: userTable
//     })
//     .promise()
//     .then(res => {
//       callback(null, response(200, res.Items.sort(sortByDate)));
//     })
//     .catch(err => callback(null, response(err.statusCode, err)));
// };

//Create content
export async function createCategory(event, context, callback) {
  const documentClient = new DynamoDB.DocumentClient();
  let responseBody = "";
  let statusCode = 0;

  const { id, content } = JSON.parse(event.body);

  const params = {
    TableName: "ContentTable",
    Item: {
      id: id,
      content: content
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put content: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin":"*"
    },
    body: responseBody
  };

  return response;
}

export async function getAllContent(event, context, callback) {
  const documentClient = new DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: ContentTable
  };

  try {
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
  } catch(err) {
    responseBody = `Unable to get products: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody
  };

  return response;
}
