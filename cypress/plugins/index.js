/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />




// const percyHealthCheck = require('@percy/cypress/task')

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config);
//   on('task', percyHealthCheck);
//   config.viewPortWidth = 2045;
//   config.viewPortHeight = 1150;

// }




/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;

};

const _ = require('lodash')
const del = require('del')

module.exports = (on, config) => {
    on('after:spec', (spec, results) => {
        if (results && results.video) {
            // Do we have failures for any retry attempts?
            const failures = _.some(results.tests, (test) => {
                return _.some(test.attempts, { state: 'failed' })
            })
            if (!failures) {
                // delete the video if the spec passed and no tests retried
                return del(results.video)
            }
        }
    })
}
