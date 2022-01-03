const elasticsearch = require('elasticsearch');

const host = '127.0.0.1:9200';

const es_client = new elasticsearch.Client({
    host: host,
    log: 'error'
});

module.exports = es_client;