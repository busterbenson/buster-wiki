exports.handler = function(event, context, callback) {
	console.log("Loaded algolia.js");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};