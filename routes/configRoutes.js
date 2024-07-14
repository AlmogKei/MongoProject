const phoneRoutes = require('./phones');
const companyRoutes = require('./companies');

function routesInit(app)  {
  app.use('/phones', phoneRoutes);  
  app.use('/companies', companyRoutes);  
};

module.exports = { routesInit };
