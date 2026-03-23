/*
 * Title: All routes
 * Description: Application all routes
 * Date: 03/21/2026
 */

// Dependencies
const { sampleHander } = require('./handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler');
const { checkHandler } = require('./handlers/routeHandlers/checkHandler');

const routes = {
    sample: sampleHander,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};

module.exports = routes;
