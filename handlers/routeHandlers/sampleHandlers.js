/*
 * Title: Sample Handler
 * Description: Sample Hander
 * Date: 03/21/2026
 */

// module scaffolding
const handler = {};

handler.sampleHander = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        messege: 'This a sample URL',
    });
};

module.exports = handler;
