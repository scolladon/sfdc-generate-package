const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');
const xml2js = require('xml2js');
const fs = require('fs');
const AbstractTypeStrategy = require('./standard-type-strategy');

const parseStringAsync = (customLabelFileContent) => {
  return new Promise((resolve, reject) => {
    let parser = new xml2js.Parser();
    parser.parseString(customLabelFileContent, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = class CustomLabelStrategy extends AbstractTypeStrategy {
  constructor(child) {
    super(child);
  }

  build(){
    return new Promise((resolve, reject) => {
      if(this.child.children.length > 0) {
        const type = xmlbuilder.create('types');
        Promise.all(
          this.child.children
          .sort((a,b) => a.name.localeCompare(b.name))
          .map( aCustomLabelNode => fs.readFileSync(aCustomLabelNode.path,"utf8"))
          .map(parseStringAsync)
        ).then(result => {
          result.forEach( customLabelFile =>
            customLabelFile.CustomLabels.labels.forEach(customLabelDefinition => {
              type.ele('members')
              .t(customLabelDefinition.fullName[0]);
            })
          )        
        }).then(()=> {
          type.ele('name').t(metadata[this.child.name].children[metadata[this.child.name].xmlName]);
          resolve(type);
        }).catch(reject);
      }
    });
  }
};