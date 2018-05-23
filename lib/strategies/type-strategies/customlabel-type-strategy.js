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
        .map( aNode => readFileAsync(aNode,'utf8').then(xml2jsAsync))
      ).then(result => {
        let isEmpty = true;
        const types = []
        const type = xmlbuilder.create('types');
        result.filter(x=>x.content && x.content.CustomLabels && x.content.CustomLabels.labels && x.content.CustomLabels.labels.length > 0)
        .forEach( customLabelFile => {
          const definitions = customLabelFile.content.CustomLabels.labels
          .sort((a,b) => a.fullName[0].localeCompare(b.fullName[0]));
          isEmpty &= definitions.length == 0;
          definitions.forEach(aDefinition => {
            type.ele('members')
            .t(aDefinition.fullName[0]);
          })
        })
        type.ele('name').t(metadata[this.child.name].children[metadata[this.child.name].xmlName]);
        types.push(type)
        resolve(isEmpty ? undefined : types);
      }).catch(reject);
    });
    return promise;
  }
};