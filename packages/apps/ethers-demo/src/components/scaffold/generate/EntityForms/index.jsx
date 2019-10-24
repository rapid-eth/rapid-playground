/**
 * @name EntityForms
 * @description Read from schema and generate entity form module exports.
 */
const SchemaList = require('scaffold/schema')
const FormVertical =  require('./forms/FormVertical').default
const FormAdventureComposed =  require('./forms/FormAdventureComposed').default

// Map Schema List
Object.values(SchemaList)
.forEach( entity => {

  // Form Create
  let Form = {
    vertical: <FormVertical schema={entity} />
  }

  console.log(entity.object, 'entityentity')
  if(entity.object === 'adventure') {
    Form.composed = <FormAdventureComposed schema={entity} />
  }

  // Export Generated Entity Modules
  module.exports[entity.object] = {
    form: Form
  }
})