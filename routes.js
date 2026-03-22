/*
 * Title: All routes
 * Description: Application all routes
 * Date: 03/21/2026
 */

// Dependencies
const { sampleHander } = require('./handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHander,
    user: userHandler,
};

module.exports = routes;
