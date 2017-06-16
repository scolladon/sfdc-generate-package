'use strict';
const fs = require('fs');
const xml2js = require('xml2js');
const dirTree = require('directory-tree');
const metadata = require('./lib/utils/metadata');
const xmlbuilder = require('xmlbuilder');
const typeStrategyFactory = require('./lib/factories/type-strategy-factory.js');

const PACKAGE_XML_FILE_NAME = 'package.xml';

module.exports = (config,logger) => {

  // Check if we have enough config options
  if(typeof config.src === 'undefined' || config.src === null) {
    throw new Error('Not enough config options');
  }
  // The module return this promise
  // This is where the job is done
  return new Promise((resolve, reject) => {
    const xml = xmlbuilder.create('Package')
      .att('xmlns', 'http://soap.sforce.com/2006/04/metadata')
      .dec('1.0', 'UTF-8');  
    dirTree(config.src).children.filter(child => metadata[child.name] !== undefined && child.children != undefined )
    .sort((a,b) => metadata[a.name].xmlName.localeCompare(metadata[b.name].xmlName))
    .forEach( child => {
      typeStrategyFactory(child).build(xml);
    });
    xml.ele('version')
    .t(config.apiVersion);
    const xmlContent = xml.end({ pretty: true, indent: '  ', newline: '\n' });
    fs.writeFileSync(config.output + '/' + PACKAGE_XML_FILE_NAME, xmlContent);
    resolve();
  });
};