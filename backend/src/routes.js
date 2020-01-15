const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// HTTP Methods: GET, POST, PUT, DELETE

// Parameter types:
//   - Query params: req.query (Filters, Sorting, Pagination)
//   - Route params: req.params (Identify some resource in order to modify or delete it)
//   - Body: req.body (Data for creating or modifying a register)

// MongoDB (Non-relational)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;