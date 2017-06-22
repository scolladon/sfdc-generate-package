const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');
const xml2jsAsync = require('../../utils/async-xml-parser');
const fs = require('fs');
const AbstractTypeStrategy = require('./standard-type-strategy');

module.exports = class CustomLabelStrategy extends AbstractTypeStrategy {
  constructor(child) {
    super(child);
  }

  build(){
    const promise = new Promise((resolve, reject) => {
      if(this.child.children.length > 0) {
        const type = xmlbuilder.create('types');
        Promise.all(
          this.child.children
          .sort((a,b) => a.name.localeCompare(b.name))
          .map( aCustomLabelNode => fs.readFileSync(aCustomLabelNode.path,"utf8"))
          .map(xml2jsAsync)
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
    return promise;
  }
};