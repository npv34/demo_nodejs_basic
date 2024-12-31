const fs = require('fs');

class FileService {
    readDataToFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
    }
}

module.exports = new FileService();