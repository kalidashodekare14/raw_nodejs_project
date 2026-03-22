// dependencies
const fs = require('fs');
const path = require('path');

const lib = {};

// base directory of the data folder

lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (eror, fileDescriptor) => {
        if (!eror && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (error1) => {
                if (!error1) {
                    fs.close(fileDescriptor, (error2) => {
                        if (!error2) {
                            callback(false);
                        } else {
                            callback('Error closing the new file');
                        }
                    });
                } else {
                    callback('Error writing  to new file');
                }
            });
        } else {
            callback('Could not create new file.');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update existing file
lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (eror, fileDescriptor) => {
        if (!eror && fileDescriptor) {
            // convert the data to string
            const stringData = JSON.stringify(data);

            // truncate the file
            fs.ftruncate(fileDescriptor, (err) => {
                if (!err) {
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err1) => {
                        if (!err1) {
                            // close the file
                            fs.close(fileDescriptor, (err2) => {
                                if (!err2) {
                                    callback(false);
                                } else {
                                    callback('Error closing file');
                                }
                            });
                        } else {
                            callback('Error writing to file');
                        }
                    });
                } else {
                    callback('Error truncating file!');
                }
            });
        } else {
            callback('Error updating may not exits');
        }
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    // unlink file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (error) => {
        if (!error) {
            callback(false);
        } else {
            callback('Error deleting file');
        }
    });
};

module.exports = lib;
