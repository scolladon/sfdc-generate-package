//this file was generated using https://github.com/ArielS1/sfdc-generate-package-metadata-generator

module.exports = apiVersion => {
    apiVersion = parseInt(apiVersion);
    return Object.keys(allMetadata).reduce((acc,metadataName) => {
        const { minApiVersion, maxApiVersion, xmlName, requiredField, children = {} } = allMetadata[metadataName];
        if(apiVersion >= minApiVersion && apiVersion <= maxApiVersion) {
            acc[metadataName] = { xmlName, requiredField, children };
        }
        return acc;
    },{});    
}

const allMetadata = {
  "ChatterExtensions": {
    "xmlName": "ChatterExtension",
    "minApiVersion": 40.0,
    "maxApiVersion": 47.0
  },
  "eclair": {
    "xmlName": "EclairGeoData",
    "minApiVersion": 39.0,
    "maxApiVersion": 47.0
  },
  "objects": {
    "xmlName": "CustomObject",
    "requiredField": "label",
    "children": {
      "compactLayouts": {
        "typeName": "CompactLayout",
        "name": "fullName"
      },
      "namedFilters": {
        "typeName": "NamedFilter",
        "name": "fullName"
      },
      "fieldSets": {
        "typeName": "FieldSet",
        "name": "fullName"
      },
      "indexes": {
        "typeName": "Index",
        "name": "fullName"
      },
      "validationRules": {
        "typeName": "ValidationRule",
        "name": "fullName"
      },
      "businessProcesses": {
        "typeName": "BusinessProcess",
        "name": "fullName"
      },
      "recordTypes": {
        "typeName": "RecordType",
        "name": "fullName"
      },
      "listViews": {
        "typeName": "ListView",
        "name": "fullName"
      },
      "webLinks": {
        "typeName": "WebLink",
        "name": "fullName"
      },
      "sharingReasons": {
        "typeName": "SharingReason",
        "name": "fullName"
      },
      "fields": {
        "typeName": "CustomField",
        "name": "fullName"
      }
    },
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "layouts": {
    "xmlName": "Layout",
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "EmbeddedServiceFlowConfig": {
    "xmlName": "EmbeddedServiceFlowConfig",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "homePageLayouts": {
    "xmlName": "HomePageLayout",
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "iot": {
    "xmlName": "OrchestrationContext",
    "minApiVersion": 41.0,
    "maxApiVersion": 47.0
  },
  "reportTypes": {
    "xmlName": "ReportType",
    "minApiVersion": 14.0,
    "maxApiVersion": 47.0
  },
  "leadSharingRules": {
    "xmlName": "LeadSharingRules",
    "children": {
      "leadCriteriaBasedSharingRules": {
        "typeName": "LeadCriteriaBasedSharingRule",
        "name": "fullName"
      },
      "leadOwnerSharingRules": {
        "typeName": "LeadOwnerSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "recommendationStrategies": {
    "xmlName": "RecommendationStrategy",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "analyticSnapshots": {
    "xmlName": "AnalyticSnapshot",
    "minApiVersion": 16.0,
    "maxApiVersion": 47.0
  },
  "notificationtypes": {
    "xmlName": "CustomNotificationType",
    "minApiVersion": 40.0,
    "maxApiVersion": 47.0
  },
  "translations": {
    "xmlName": "Translations",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "flowDefinitions": {
    "xmlName": "FlowDefinition",
    "minApiVersion": 34.0,
    "maxApiVersion": 47.0
  },
  "prompts": {
    "xmlName": "Prompt",
    "minApiVersion": 46.0,
    "maxApiVersion": 47.0
  },
  "actionLinkGroupTemplates": {
    "xmlName": "ActionLinkGroupTemplate",
    "minApiVersion": 33.0,
    "maxApiVersion": 47.0
  },
  "letterhead": {
    "xmlName": "Letterhead",
    "minApiVersion": 12.0,
    "maxApiVersion": 47.0
  },
  "transactionSecurityPolicies": {
    "xmlName": "TransactionSecurityPolicy",
    "minApiVersion": 34.0,
    "maxApiVersion": 47.0
  },
  "portals": {
    "xmlName": "Portal",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "feedFilters": {
    "xmlName": "CustomFeedFilter",
    "minApiVersion": 35.0,
    "maxApiVersion": 47.0
  },
  "cleanDataServices": {
    "xmlName": "CleanDataService",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "triggers": {
    "xmlName": "ApexTrigger",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "approvalProcesses": {
    "xmlName": "ApprovalProcess",
    "minApiVersion": 28.0,
    "maxApiVersion": 47.0
  },
  "labels": {
    "xmlName": "CustomLabels",
    "children": {
      "CustomLabels": "CustomLabel"
    },
    "minApiVersion": 14.0,
    "maxApiVersion": 47.0
  },
  "platformEventChannelMembers": {
    "xmlName": "PlatformEventChannelMember",
    "minApiVersion": 47.0,
    "maxApiVersion": 47.0
  },
  "accountSharingRules": {
    "xmlName": "AccountSharingRules",
    "children": {
      "accountOwnerSharingRules": {
        "typeName": "AccountOwnerSharingRule",
        "name": "fullName"
      },
      "accountCriteriaBasedSharingRules": {
        "typeName": "AccountCriteriaBasedSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "lwc": {
    "xmlName": "LightningComponentBundle",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "synonymDictionaries": {
    "xmlName": "SynonymDictionary",
    "minApiVersion": 29.0,
    "maxApiVersion": 47.0
  },
  "weblinks": {
    "xmlName": "CustomPageWebLink",
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "datacategorygroups": {
    "xmlName": "DataCategoryGroup",
    "minApiVersion": 18.0,
    "maxApiVersion": 47.0
  },
  "eventSubscriptions": {
    "xmlName": "EventSubscription",
    "minApiVersion": 36.0,
    "maxApiVersion": 45.0
  },
  "components": {
    "xmlName": "ApexComponent",
    "minApiVersion": 12.0,
    "maxApiVersion": 47.0
  },
  "staticresources": {
    "xmlName": "StaticResource",
    "minApiVersion": 12.0,
    "maxApiVersion": 47.0
  },
  "tabs": {
    "xmlName": "CustomTab",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "installedPackages": {
    "xmlName": "InstalledPackage",
    "minApiVersion": 28.0,
    "maxApiVersion": 47.0
  },
  "networks": {
    "xmlName": "Network",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "aura": {
    "xmlName": "AuraDefinitionBundle",
    "minApiVersion": 32.0,
    "maxApiVersion": 47.0
  },
  "matchingRules": {
    "xmlName": "MatchingRules",
    "children": {
      "matchingRules": {
        "typeName": "MatchingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 33.0,
    "maxApiVersion": 47.0
  },
  "eventDeliveries": {
    "xmlName": "EventDelivery",
    "minApiVersion": 36.0,
    "maxApiVersion": 45.0
  },
  "userSharingRules": {
    "xmlName": "UserSharingRules",
    "children": {
      "userMembershipSharingRules": {
        "typeName": "UserMembershipSharingRule",
        "name": "fullName"
      },
      "userCriteriaBasedSharingRules": {
        "typeName": "UserCriteriaBasedSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 29.0,
    "maxApiVersion": 32.0
  },
  "authproviders": {
    "xmlName": "AuthProvider",
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "LeadConvertSettings": {
    "xmlName": "LeadConvertSettings",
    "minApiVersion": 35.0,
    "maxApiVersion": 47.0
  },
  "corsWhitelistOrigins": {
    "xmlName": "CorsWhitelistOrigin",
    "minApiVersion": 32.0,
    "maxApiVersion": 47.0
  },
  "flexipages": {
    "xmlName": "FlexiPage",
    "minApiVersion": 29.0,
    "maxApiVersion": 47.0
  },
  "contentassets": {
    "xmlName": "ContentAsset",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "email": {
    "xmlName": "EmailTemplate",
    "minApiVersion": 12.0,
    "maxApiVersion": 47.0
  },
  "campaignSharingRules": {
    "xmlName": "CampaignSharingRules",
    "children": {
      "campaignCriteriaBasedSharingRules": {
        "typeName": "CampaignCriteriaBasedSharingRule",
        "name": "fullName"
      },
      "campaignOwnerSharingRules": {
        "typeName": "CampaignOwnerSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "MobileApplicationDetails": {
    "xmlName": "MobileApplicationDetail",
    "minApiVersion": 30.0,
    "maxApiVersion": 47.0
  },
  "EmbeddedServiceBranding": {
    "xmlName": "EmbeddedServiceBranding",
    "minApiVersion": 39.0,
    "maxApiVersion": 47.0
  },
  "certs": {
    "xmlName": "Certificate",
    "minApiVersion": 36.0,
    "maxApiVersion": 47.0
  },
  "lightningOnboardingConfigs": {
    "xmlName": "LightningOnboardingConfig",
    "minApiVersion": 47.0,
    "maxApiVersion": 47.0
  },
  "customHelpMenuSections": {
    "xmlName": "CustomHelpMenuSection",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "CaseSubjectParticles": {
    "xmlName": "CaseSubjectParticle",
    "minApiVersion": 41.0,
    "maxApiVersion": 47.0
  },
  "externalServiceRegistrations": {
    "xmlName": "ExternalServiceRegistration",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "globalPicklists": {
    "xmlName": "GlobalPicklist",
    "minApiVersion": 35.0,
    "maxApiVersion": 37.0
  },
  "escalationRules": {
    "xmlName": "EscalationRules",
    "children": {
      "escalationRules": {
        "typeName": "EscalationRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "communities": {
    "xmlName": "Community",
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "profileSessionSettings": {
    "xmlName": "ProfileSessionSetting",
    "minApiVersion": 40.0,
    "maxApiVersion": 47.0
  },
  "pathAssistants": {
    "xmlName": "PathAssistant",
    "minApiVersion": 34.0,
    "maxApiVersion": 47.0
  },
  "reports": {
    "xmlName": "Report",
    "minApiVersion": 14.0,
    "maxApiVersion": 47.0
  },
  "callCenters": {
    "xmlName": "CallCenter",
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "profilePasswordPolicies": {
    "xmlName": "ProfilePasswordPolicy",
    "minApiVersion": 40.0,
    "maxApiVersion": 47.0
  },
  "remoteSiteSettings": {
    "xmlName": "RemoteSiteSetting",
    "minApiVersion": 19.0,
    "maxApiVersion": 47.0
  },
  "documents": {
    "xmlName": "Document",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "customPermissions": {
    "xmlName": "CustomPermission",
    "minApiVersion": 31.0,
    "maxApiVersion": 47.0
  },
  "sites": {
    "xmlName": "CustomSite",
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "topicsForObjects": {
    "xmlName": "TopicsForObjects",
    "minApiVersion": 41.0,
    "maxApiVersion": 47.0
  },
  "opportunitySharingRules": {
    "xmlName": "OpportunitySharingRules",
    "children": {
      "opportunityOwnerSharingRules": {
        "typeName": "OpportunityOwnerSharingRule",
        "name": "fullName"
      },
      "opportunityCriteriaBasedSharingRules": {
        "typeName": "OpportunityCriteriaBasedSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "dashboards": {
    "xmlName": "Dashboard",
    "minApiVersion": 14.0,
    "maxApiVersion": 47.0
  },
  "assignmentRules": {
    "xmlName": "AssignmentRules",
    "children": {
      "assignmentRules": {
        "typeName": "AssignmentRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "standardValueSets": {
    "xmlName": "StandardValueSet",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "pages": {
    "xmlName": "ApexPage",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "postTemplates": {
    "xmlName": "PostTemplate",
    "minApiVersion": 29.0,
    "maxApiVersion": 47.0
  },
  "lightningBolts": {
    "xmlName": "LightningBolt",
    "minApiVersion": 42.0,
    "maxApiVersion": 47.0
  },
  "EmbeddedServiceConfig": {
    "xmlName": "EmbeddedServiceConfig",
    "minApiVersion": 37.0,
    "maxApiVersion": 47.0
  },
  "dataSources": {
    "xmlName": "ExternalDataSource",
    "minApiVersion": 25.0,
    "maxApiVersion": 47.0
  },
  "settings": {
    "xmlName": "Settings",
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "homePageComponents": {
    "xmlName": "HomePageComponent",
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "recordActionDeployments": {
    "xmlName": "RecordActionDeployment",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "profiles": {
    "xmlName": "Profile",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "testSuites": {
    "xmlName": "ApexTestSuite",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "Canvases": {
    "xmlName": "CanvasMetadata",
    "minApiVersion": 26.0,
    "maxApiVersion": 47.0
  },
  "duplicateRules": {
    "xmlName": "DuplicateRule",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "contactSharingRules": {
    "xmlName": "ContactSharingRules",
    "children": {
      "contactCriteriaBasedSharingRules": {
        "typeName": "ContactCriteriaBasedSharingRule",
        "name": "fullName"
      },
      "contactOwnerSharingRules": {
        "typeName": "ContactOwnerSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "siteDotComSites": {
    "xmlName": "SiteDotCom",
    "minApiVersion": 30.0,
    "maxApiVersion": 47.0
  },
  "customObjectSharingRules": {
    "xmlName": "CustomObjectSharingRules",
    "children": {
      "customObjectOwnerSharingRules": {
        "typeName": "CustomObjectOwnerSharingRule",
        "name": "fullName"
      },
      "customObjectCriteriaBasedSharingRules": {
        "typeName": "CustomObjectCriteriaBasedSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "sharingRules": {
    "xmlName": "SharingRules",
    "children": {
      "sharingOwnerRules": {
        "typeName": "SharingOwnerRule",
        "name": "fullName"
      },
      "sharingCriteriaRules": {
        "typeName": "SharingCriteriaRule",
        "name": "fullName"
      },
      "sharingTerritoryRules": {
        "typeName": "sharingTerritoryRules",
        "name": "fullName"
      }
    },
    "minApiVersion": 33.0,
    "maxApiVersion": 47.0
  },
  "customApplicationComponents": {
    "xmlName": "CustomApplicationComponent",
    "minApiVersion": 25.0,
    "maxApiVersion": 47.0
  },
  "autoResponseRules": {
    "xmlName": "AutoResponseRules",
    "children": {
      "autoResponseRules": {
        "typeName": "AutoResponseRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 27.0,
    "maxApiVersion": 47.0
  },
  "caseSharingRules": {
    "xmlName": "CaseSharingRules",
    "children": {
      "caseCriteriaBasedSharingRules": {
        "typeName": "CaseCriteriaBasedSharingRule",
        "name": "fullName"
      },
      "caseOwnerSharingRules": {
        "typeName": "CaseOwnerSharingRule",
        "name": "fullName"
      }
    },
    "minApiVersion": 24.0,
    "maxApiVersion": 32.0
  },
  "delegateGroups": {
    "xmlName": "DelegateGroup",
    "minApiVersion": 36.0,
    "maxApiVersion": 47.0
  },
  "networkBranding": {
    "xmlName": "NetworkBranding",
    "minApiVersion": 41.0,
    "maxApiVersion": 47.0
  },
  "cachePartitions": {
    "xmlName": "PlatformCachePartition",
    "minApiVersion": 35.0,
    "maxApiVersion": 47.0
  },
  "appMenus": {
    "xmlName": "AppMenu",
    "minApiVersion": 30.0,
    "maxApiVersion": 47.0
  },
  "classes": {
    "xmlName": "ApexClass",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "roles": {
    "xmlName": "Role",
    "minApiVersion": 24.0,
    "maxApiVersion": 47.0
  },
  "standardValueSetTranslations": {
    "xmlName": "StandardValueSetTranslation",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "workflows": {
    "xmlName": "Workflow",
    "requiredField": "label",
    "children": {
      "alerts": {
        "typeName": "WorkflowAlert",
        "name": "fullName"
      },
      "fieldUpdates": {
        "typeName": "WorkflowFieldUpdate",
        "name": "fullName"
      },
      "outboundMessages": {
        "typeName": "WorkflowOutboundMessage",
        "name": "fullName"
      },
      "actionReferences": {
        "typeName": "WorkflowActionReference",
        "name": "fullName"
      },
      "rules": {
        "typeName": "WorkflowRule",
        "name": "fullName"
      },
      "emailRecipients": {
        "typeName": "WorkflowEmailRecipient",
        "name": "fullName"
      },
      "timeTriggers": {
        "typeName": "WorkflowTimeTrigger",
        "name": "fullName"
      },
      "knowledgePublishes": {
        "typeName": "WorkflowKnowledgePublish",
        "name": "fullName"
      },
      "tasks": {
        "typeName": "WorkflowTask",
        "name": "fullName"
      },
      "sends": {
        "typeName": "WorkflowSend",
        "name": "fullName"
      }
    },
    "minApiVersion": 13.0,
    "maxApiVersion": 47.0
  },
  "quickActions": {
    "xmlName": "QuickAction",
    "minApiVersion": 28.0,
    "maxApiVersion": 47.0
  },
  "oauthcustomscopes": {
    "xmlName": "OauthCustomScope",
    "minApiVersion": 46.0,
    "maxApiVersion": 47.0
  },
  "animationRules": {
    "xmlName": "AnimationRule",
    "minApiVersion": 46.0,
    "maxApiVersion": 47.0
  },
  "flows": {
    "xmlName": "Flow",
    "minApiVersion": 24.0,
    "maxApiVersion": 47.0
  },
  "emailservices": {
    "xmlName": "EmailServicesFunction",
    "minApiVersion": 42.0,
    "maxApiVersion": 47.0
  },
  "lightningExperienceThemes": {
    "xmlName": "LightningExperienceTheme",
    "minApiVersion": 42.0,
    "maxApiVersion": 47.0
  },
  "channelLayouts": {
    "xmlName": "ChannelLayout",
    "minApiVersion": 32.0,
    "maxApiVersion": 47.0
  },
  "customMetadata": {
    "xmlName": "CustomMetadata",
    "minApiVersion": 31.0,
    "maxApiVersion": 47.0
  },
  "scontrols": {
    "xmlName": "Scontrol",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "samlssoconfigs": {
    "xmlName": "SamlSsoConfig",
    "minApiVersion": 28.0,
    "maxApiVersion": 47.0
  },
  "globalValueSetTranslations": {
    "xmlName": "GlobalValueSetTranslation",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "objectTranslations": {
    "xmlName": "CustomObjectTranslation",
    "minApiVersion": 14.0,
    "maxApiVersion": 47.0
  },
  "globalValueSets": {
    "xmlName": "GlobalValueSet",
    "minApiVersion": 38.0,
    "maxApiVersion": 47.0
  },
  "groups": {
    "xmlName": "Group",
    "minApiVersion": 24.0,
    "maxApiVersion": 47.0
  },
  "brandingSets": {
    "xmlName": "BrandingSet",
    "minApiVersion": 40.0,
    "maxApiVersion": 47.0
  },
  "sharingSets": {
    "xmlName": "SharingSet",
    "minApiVersion": 30.0,
    "maxApiVersion": 47.0
  },
  "cspTrustedSites": {
    "xmlName": "CspTrustedSite",
    "minApiVersion": 39.0,
    "maxApiVersion": 47.0
  },
  "queues": {
    "xmlName": "Queue",
    "minApiVersion": 24.0,
    "maxApiVersion": 47.0
  },
  "permissionsets": {
    "xmlName": "PermissionSet",
    "minApiVersion": 22.0,
    "maxApiVersion": 47.0
  },
  "permissionsetgroups": {
    "xmlName": "PermissionSetGroup",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "topicsforobjects": {
    "xmlName": "TopicsForObjects",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "namedCredentials": {
    "xmlName": "NamedCredential",
    "minApiVersion": 33.0,
    "maxApiVersion": 47.0
  },
  "platformEventChannels": {
    "xmlName": "PlatformEventChannel",
    "minApiVersion": 45.0,
    "maxApiVersion": 47.0
  },
  "connectedApps": {
    "xmlName": "ConnectedApp",
    "minApiVersion": 29.0,
    "maxApiVersion": 47.0
  },
  "flowCategories": {
    "xmlName": "FlowCategory",
    "minApiVersion": 42.0,
    "maxApiVersion": 47.0
  },
  "applications": {
    "xmlName": "CustomApplication",
    "minApiVersion": 3.0,
    "maxApiVersion": 47.0
  },
  "messageChannels": {
    "xmlName": "LightningMessageChannel",
    "minApiVersion": 47.0,
    "maxApiVersion": 47.0
  }
};
