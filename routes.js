const routes = require('next-routes')()
routes
  .add('index', '/')
  .add('orgs', '/orgs')
  .add('groups', '/groups')
  .add('users', '/users')
  .add('documents', '/documents')

module.exports = routes
