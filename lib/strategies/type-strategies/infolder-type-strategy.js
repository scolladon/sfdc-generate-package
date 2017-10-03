const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');
const AbstractTypeStrategy = require('./standard-type-strategy');

module.exports = class InFolderStrategy extends AbstractTypeStrategy {
  constructor(child) {
     super(child);
  }

  build(){
    const promise = new Promise((resolve, reject) => {
      const children = this.child.children.filter(elem => !elem.name.startsWith('.') && !elem.name.endsWith('-meta.xml'))
      if(children.length == 0) {
        resolve();
      }
      const types = []
      const type = xmlbuilder.create('types');
      children.sort((a,b) => a.name.localeCompare(b.name))
      .forEach(subChild => {
        if(subChild.name !== 'unfiled$public')type.ele('members').t(subChild.name.replace(/\.[^/.]+$/,''));
        subChild.children && subChild.children.filter(elem => elem.extension !== '' && elem.extension != '.xml' && !elem.name.startsWith('.')).sort().forEach(subsubChild => {
          type.ele('members')
          .t(subChild.name+'/'+subsubChild.name.replace(/\.[^/.]+$/,''));
        })
      })
      type.ele('name').t(metadata[this.child.name].xmlName);
      types.push(type)
      resolve(types)
    });
    return promise;
  }
};