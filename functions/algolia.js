const algoliasearch = require('algoliasearch');

const algoliaApp = process.env.ALGOLIA_APP_ID;
const algoliaIndex = process.env.ALGOLIA_INDEX_NAME;

exports.handler = function(event, context, callback) {
	console.log("Loaded algolia.js");

// Initiate an Algolia client
  const client = algoliasearch(algoliaApp, context.secrets.ALGOLIA_TOKEN);
  // Initiate the Algolia index
  const index = client.initIndex(algoliaIndex);
  callback(null, 200);


  callback(null, {
    statusCode: 200,
    body: "Done: "+algoliaApp
  });
};