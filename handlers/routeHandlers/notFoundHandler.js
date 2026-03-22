/*
 * Title: Not found handler
 * Description: 404 Not found handler
 * Date: 03/21/2026
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        messege: 'Your requested url was not found',
    });
};

module.exports = handler;
