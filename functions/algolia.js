const algoliasearch = require('algoliasearch');

const algoliaApp = process.env.ALGOLIA_APP_ID;
const algoliaIndex = process.env.ALGOLIA_INDEX_NAME;

exports.handler = function(event, context, callback) {
	console.log("Loaded algolia.js");

// Initiate an Algolia client
  const client = algoliasearch(algoliaApp, process.env.ALGOLIA_ADMIN_KEY);
  // Initiate the Algolia index
  const index = client.initIndex(algoliaIndex);
  callback(null, {
    statusCode: 200,
    body: "Done: "+algoliaApp+", "+index 
  });
};