const metadata = require('../../utils/metadata');

module.exports = class Standard {
  constructor(child) {
     this.child = child;
  }

  build(xml){
    const children = this.child.children
    .filter(elem => elem.extension && elem.extension != '.xml' && !elem.name.startsWith('.'))
    if(children.length > 0) {
      const type = xml.ele('types');
      children.sort((a,b) => a.name.localeCompare(b.name))
      .forEach(subChild => {
        type.ele('members')
          .t(subChild.name.replace(subChild.extension,''));
      })
      type.ele('name').t(metadata[this.child.name].xmlName);
    }
  }
};