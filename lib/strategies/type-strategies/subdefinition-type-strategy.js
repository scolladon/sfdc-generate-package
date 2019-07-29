const xmlbuilder = require('xmlbuilder');
const xml2jsAsync = require('../../utils/async-xml-parser');
const readFileAsync = require('../../utils/async-read-file')
const AbstractTypeStrategy = require('./standard-type-strategy');

module.exports = class SubDefinitionStrategy extends AbstractTypeStrategy {
  constructor(metadata, child) {
    super(metadata, child);
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
        const struct = {};
        struct[this.metadata[this.child.name].xmlName] = [];
        result.forEach( aFile => {
          const objectName = Object.keys(aFile.content)[0];
          if(this.metadata[this.child.name].requiredField === '' || (aFile.content[objectName].hasOwnProperty(this.metadata[this.child.name].requiredField))) {
            struct[this.metadata[this.child.name].xmlName].push(aFile.name.replace(/\.[^/.]+$/,''));
          }
          for(let childDef in aFile.content[objectName]) if(this.metadata[this.child.name].children.hasOwnProperty(childDef)) {
            struct[this.metadata[this.child.name].children[childDef].typeName] = struct[this.metadata[this.child.name].children[childDef].typeName] || [];
            aFile.content[objectName][childDef].forEach(elem => struct[this.metadata[this.child.name].children[childDef].typeName].push(aFile.name.replace(/\.[^/.]+$/,'') + '.' + elem[this.metadata[this.child.name].children[childDef].name][0]));
          }
        })

        const types = []
        Object.keys(struct).sort().forEach(aStruc => {
          const type = xmlbuilder.create('types');
          struct[aStruc].sort().forEach(elem => {
            type.ele('members')
            .t(elem); 
          })
          type.ele('name').t(aStruc);
          types.push(type);
        })
        
        resolve(types.length == 0 ? undefined : types);
      }).catch(reject);
    });
    return promise;
  }
};