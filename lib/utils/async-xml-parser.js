const xml2js = require('xml2js');

const parseStringAsync = (fileContent) => {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(fileContent, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
module.exports = parseStringAsync;