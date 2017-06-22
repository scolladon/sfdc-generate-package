const fs = require('fs');

const readFileAsync = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
  return promise;
};
module.exports = readFileAsync;