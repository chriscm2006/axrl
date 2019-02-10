/* IMPORTANT: This file is used in NodeJS, so can't use ES6 modules */
const classes = require('./schema/classes.json')
const properties = require('./schema/properties.json')

function findClassData(id) {
  return classes['@graph'].find(
    classData => classData.id === id
  )
}

function findPropertyData(id) {
  return properties['@graph'].find(
    propertyData => propertyData.id === id
  )
}

function getClassInheritance(id) {
  const classData = findClassData(id)
  if (!classData) {
    return []
  }
  return getClassInheritance(classData.subClassOf).concat(
    classData
  )
}

function getSuperClasses(type) {
  return classes['@graph'].filter(
    ({ subClassOf }) => subClassOf === type
  )
}

function getPropertyDescriptions() {
  return [...properties['@graph']]
}

function getClassDescriptions() {
  return [...classes['@graph']]
}

function getTypeDescriptions() {
  return [
    ...getPropertyDescriptions(),
    ...getClassDescriptions()
  ]
}

function getClassHierarchy(parentClass) {
  const subclasses = getClassDescriptions().filter(
    ({ subClassOf }) => subClassOf === parentClass
  )

  return subclasses.map(classDefinition => {
    return {
      subclasses: getClassHierarchy(classDefinition.id),
      ...classDefinition
    }
  })
}

function findTypeData(type) {
  return findClassData(type) || findPropertyData(type)
}

module.exports = {
  findClassData,
  findPropertyData,
  findTypeData,
  getClassInheritance,
  getSuperClasses,
  getClassDescriptions,
  getPropertyDescriptions,
  getTypeDescriptions,
  getClassHierarchy
}