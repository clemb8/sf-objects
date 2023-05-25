export interface SObject {
    activateable : boolean, 
    custom : boolean,
    customSetting : boolean, 
    createable : boolean, 
    deletable : boolean, 
    deprecatedAndHidden : boolean, 
    feedEnabled : boolean, 
    keyPrefix : string, 
    label : string, 
    labelPlural : string, 
    layoutable : boolean, 
    mergeable : boolean, 
    mruEnabled : boolean, 
    name : string, 
    queryable : boolean, 
    replicateable : boolean, 
    retrieveable : boolean, 
    searchable : boolean, 
    triggerable : boolean, 
    undeletable : boolean,
    updateable : boolean, 
    urls : { 
        sobject : string, 
        describe : string, 
        rowTemplate :string 
    },
    recentItems: RecentItem[]

}

export interface RecentItem {
    attributes: {
        type: string,
        url: string
    },
    Id: string,
    Name: string
}

// create interface for SObjectDescribe that implement SObject
export interface SObjectDescribe extends SObject {
    fields: Field[],
    childRelationships: ChildRelationship[]
}

export interface Field {
    autonumber: boolean,
    byteLength: number,
    calculated: boolean,
    caseSensitive: boolean,
    controllerName: string,
    createable: boolean,
    custom: boolean,
    dataTranslationEnabled: boolean,
    defaultOnCreate: boolean,
    defaultValueFormula: string,
    dependentPicklist: boolean,
    deprecatedAndHidden: boolean,
    digits: number,
    displayLocationInDecimal: boolean,
    encrypted: boolean,
    extraTypeInfo: string,
    filterable: boolean,
    filteredLookupInfo: unknown,
    formula: string,
    groupable: boolean,
    highScaleNumber: boolean,
    htmlFormatted: boolean,
    idLookup: boolean,
    inlineHelpText: string,
    label: string,
    length: number,
    mask: string,
    maskType: string,
    name: string,
    nameField: boolean,
    namePointing: boolean,
    nillable: boolean,
    permissionable: boolean,
    picklistValues: string[],
    polymorphicForeignKey: boolean,
    precision: number,
    relationshipName: string,
    relationshipOrder: number,
    referenceTargetField: string,
    referenceTo: string[],
    restrictedDelete: boolean,
    scale: number,
    searchPrefilterable: boolean,
    soapType: string,
    sortable: boolean,
    type: string,
    unique: boolean,
    defaultValue: { value: unknown },
    updateable: boolean,
    writeRequiresMasterRead: boolean,
}

export interface ChildRelationship {
    cascadeDelete: boolean,
    childSObject: string,
    deprecatedAndHidden: boolean,
    field: string,
    junctionIdListNames: string[],
    junctionReferenceTo: string[],
    relationshipName: string,
    restrictedDelete: boolean
}
