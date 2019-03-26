'use strict';
const CustomLabel = require('../strategies/type-strategies/customlabel-type-strategy');
const SubDef = require('../strategies/type-strategies/subdefinition-type-strategy');
const Standard = require('../strategies/type-strategies/standard-type-strategy');
const InFolder = require('../strategies/type-strategies/infolder-type-strategy');
const Aura = require('../strategies/type-strategies/aura-type-strategy');
const metadata = require('../utils/metadata');

// TODO CustomObject
// TODO email template and report dashboard and Document

const classes = {
  'CustomLabels' : CustomLabel,
  'Workflow' : SubDef,
  'CustomObject' : SubDef,
  'EmailTemplate' : InFolder,
  'Document' : InFolder,
  'Report' : InFolder,
  'Dashboard' : InFolder,
  'AuraDefinitionBundle' : Aura,
  'LightningComponentBundle' : Aura
};

module.exports = class StandardStrategy {
  getTypeStrategy(type){
    return !!classes[metadata[type.name].xmlName] ? new (classes[metadata[type.name].xmlName])(type) : new Standard(type);
  }
};