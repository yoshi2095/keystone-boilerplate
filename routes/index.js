const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api')
};

exports = module.exports = function(app){
  app.get('/', routes.views.index);
  app.get('/add-event', routes.views.addEvent);
  app.post('/api/event', routes.api.event.post);
};