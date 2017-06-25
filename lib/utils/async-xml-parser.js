const xml2js = require('xml2js');

const parseStringAsync = (file) => {
  const promise = new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(file.content, (err, result) => {
      if (err) reject(err);
      file.content = result;
      resolve(file);
    });
  });
  return promise;
};
module.exports = parseStringAsync;