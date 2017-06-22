const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');
const xml2jsAsync = require('../../utils/async-xml-parser');
const readFileAsync = require('../../utils/async-read-file')
const AbstractTypeStrategy = require('./standard-type-strategy');

module.exports = class CustomLabelStrategy extends AbstractTypeStrategy {
  constructor(child) {
    super(child);
  }

  build(){
    const promise = new Promise((resolve, reject) => {
      if(this.child.children.length == 0) {
        resolve();
      }
      Promise.all(
        this.child.children
        .sort((a,b) => a.name.localeCompare(b.name))
        .map( aCustomLabelNode => readFileAsync(aCustomLabelNode.path,'utf8').then(xml2jsAsync))
      ).then(result => {
        let isEmpty = true;
        const type = xmlbuilder.create('types');
        result.forEach( customLabelFile => {
          const customLabelDefinitions = customLabelFile.CustomLabels.labels
          .sort((a,b) => a.fullName[0].localeCompare(b.fullName[0]));
          isEmpty &= customLabelDefinitions.length == 0;
          customLabelDefinitions.forEach(customLabelDefinition => {
            type.ele('members')
            .t(customLabelDefinition.fullName[0]);
          })
        })
        type.ele('name').t(metadata[this.child.name].children[metadata[this.child.name].xmlName]);
        resolve(isEmpty ? undefined : type);
      }).catch(reject);
    });
    return promise;
  }
};