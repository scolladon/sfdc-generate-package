const xml2js = require('xml2js');

const parseStringAsync = (fileContent) => {
  const promise = new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(fileContent, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
  return promise;
};
module.exports = parseStringAsync;