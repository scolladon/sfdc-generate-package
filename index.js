'use strict';
const fs = require('fs');
const dirTree = require('directory-tree');
const metadata = require('./lib/utils/metadata');
const xmlbuilder = require('xmlbuilder');
const TypeStrategyFactory = require('./lib/factories/type-strategy-factory.js');

const PACKAGE_XML_FILE_NAME = 'package.xml';

module.exports = (config,logger) => {

  // Check if we have enough config options
  if(typeof config.src === 'undefined' || config.src === null) {
    throw new Error('Not enough config options');
  }
  // The module return this promise
  // This is where the job is done
  const promise = new Promise((resolve, reject) => {
    const typeStrategyFactory = new TypeStrategyFactory();
    Promise.all(
      dirTree(config.src).children.filter(child => metadata[child.name] !== undefined && child.children != undefined && child.children.length > 0)
      .sort((a,b) => metadata[a.name].xmlName.localeCompare(metadata[b.name].xmlName))
      .map(elem => typeStrategyFactory.getTypeStrategy(elem).build())
    ).then(result => {
      const xml = xmlbuilder.create('Package')
      .att('xmlns', 'http://soap.sforce.com/2006/04/metadata')
      .dec('1.0', 'UTF-8');
      result.forEach(elem => {if(!!elem) xml.importDocument(elem)});
      xml.ele('version')
      .t(config.apiVersion);
      const xmlContent = xml.end({ pretty: true, indent: '  ', newline: '\n' });
      fs.writeFileSync(config.output + '/' + PACKAGE_XML_FILE_NAME, xmlContent);
      resolve();
    }).catch(reject);
  });
  return promise;
};