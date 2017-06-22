const metadata = require('../../utils/metadata');
const xmlbuilder = require('xmlbuilder');

module.exports = class StandardStrategy {
  constructor(child) {
     this.child = child;
  }

  build(){
    const promise = new Promise((resolve, reject) => {
      if(this.child.children.length == 0) {
        resolve();
      }
      const type = xmlbuilder.create('types');
      this.child.children
      .filter(elem => elem.extension && elem.extension != '.xml' && !elem.name.startsWith('.'))
      .sort((a,b) => a.name.localeCompare(b.name))
      .forEach(subChild => {
        type.ele('members')
        .t(subChild.name.replace(/\.[^/.]+$/,''));
      })
      type.ele('name').t(metadata[this.child.name].xmlName);
      resolve(type)
    });
    return promise;
  }
};