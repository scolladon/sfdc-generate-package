const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');

module.exports = class StandardStrategy {
  constructor(child) {
     this.child = child;
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
        type.ele('members')
        .t(subChild.name.replace(/\.[^/.]+$/,''));
        subChild.children && subChild.children.filter(elem => elem.extension && elem.extension != '.xml' && !elem.name.startsWith('.')).sort().forEach(subsubChild => {
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