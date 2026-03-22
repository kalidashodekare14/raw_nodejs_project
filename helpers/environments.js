/*
 * Title: Environments
 * Description: Handle all environment related things
 * Date: 03/22/2026
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    evnName: 'staging',
    secretKey: 'dfkjfdskfjdfijsdlkfjkjdf',
};

environments.production = {
    port: 5000,
    evnName: 'production',
    secretKey: 'sdfrer54ererfdfererer',
};

// determine watch environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// start the server
module.exports = environmentToExport;
