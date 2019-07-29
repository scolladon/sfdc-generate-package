'use strict';
const fs = require('fs');
const dirTree = require('directory-tree');
const metadataBuilder = require('./lib/utils/metadata');
const xmlbuilder = require('xmlbuilder');
const TypeStrategyFactory = require('./lib/factories/type-strategy-factory.js');

const PACKAGE_XML_FILE_NAME = 'package.xml';

module.exports = ({ src, output, apiVersion, ident }, logger) => {

  // Check if we have enough config options
  if(!src) {
    throw new Error('Not enough config options');
  }
  // The module return this promise
  // This is where the job is done
  const promise = new Promise((resolve, reject) => {
    const typeStrategyFactory = new TypeStrategyFactory();
    const metadata = metadataBuilder(apiVersion); // get api version specific metadata
    Promise.all(
      dirTree(src).children.filter(child => metadata[child.name] !== undefined && child.children != undefined && child.children.length > 0)
      .sort((a,b) => metadata[a.name].xmlName.localeCompare(metadata[b.name].xmlName))
      .map(elem => typeStrategyFactory.getTypeStrategy(metadata, elem).build())
    ).then(result => {
      const xml = xmlbuilder.create('Package')
      .att('xmlns', 'http://soap.sforce.com/2006/04/metadata')
      .dec('1.0', 'UTF-8');

      [].concat(...result).filter(elem => !!elem).forEach(elem => xml.importDocument(elem));
      xml.ele('version')
      .t(apiVersion);
      const xmlContent = xml.end({ pretty: true, indent: indent || '    ', newline: '\n' });
      fs.writeFileSync(output + '/' + PACKAGE_XML_FILE_NAME, xmlContent);
      resolve();
    }).catch(reject);
  });
  return promise;
};
