/*
 * Title: Utilities
 * Description: Important utility functions
 * Date: 03/22/2026
 */

// dependencies

// module scaffolding
const crypto = require('crypto');

const utilities = {};
const environments = require('./environments');

// parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch (error) {
        output = {};
    }

    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        let hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
};

// start the server
module.exports = utilities;
