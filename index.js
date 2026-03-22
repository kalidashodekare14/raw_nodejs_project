/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user  defined links
 * Date: 03/21/2026
 */

//  dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleResRes');
const environment = require('./helpers/environments');
// const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// TODO: I will remove later

// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (error) => {
//     console.log(`error was ${error}`);
// });
// data.read('test', 'newFile', (error, readData) => {
//     console.log(error, readData);
// });
// data.update('test', 'newFile', { name: 'England', language: 'English' }, (error) => {
//     console.log('error is', error);
// });
// data.delete('test', 'newFile', (error) => {
//     console.log('error is', error);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
