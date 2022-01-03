(function () {
  'use strict';

  const esClient = require('../engine')

  const indices = function indices() {
    return esClient.cat.indices({v: true})
    .then(console.log)
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
  };

  // only for testing purposes
  // all calls should be initiated through the module
  const test = function test() {
    console.log(`elasticsearch indices information:`);
    indices();
  };

  test();

  module.exports = {
    indices
  };
} ());
