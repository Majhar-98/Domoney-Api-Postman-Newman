const newman = require('newman');
 
newman.run({
    //collection: require('./collection/collection.json'),
    collection:'https://api.postman.com/collections/13493263-7e27f974-ea5f-49b1-b8dc-2315f4867844?access_key=PMAT-01GQQ8RH9HY1J201QB56RXKPA9',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});