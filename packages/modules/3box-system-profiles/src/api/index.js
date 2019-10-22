// Search Folders
const children = require.context('.', true, /\.\/[^/]+\/index\.jsx$/)
console.log(children, '')
children.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1')
  module.exports[componentName] = children(key).default
})

// Search Nested Folders
const granchildren = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.jsx$/)
console.log(granchildren, 'granchildren')
granchildren.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1')
  module.exports[componentName] = granchildren(key).default
})