const newman = require('newman');

Cypress.Commands.add('runPostmanCollection', (collectionPath, environmentPath) => {
    return new Cypress.Promise((resolve, reject) => {
        newman.run({
            collection: require(collectionPath),
            environment: require(environmentPath)
        }, (err, summary) => {
            if (err) {
                reject(err);
            } else {
                resolve(summary);
            }
        });
    });
});