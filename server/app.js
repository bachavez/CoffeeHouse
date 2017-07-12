const express = require('express');
const bodyParser = require('body-parser');
const customersRoute = require('./routes/customers.route');
const productsRoute = require('./routes/products.route');
const salesRoute = require('./routes/sales.route');
const saledetailsRoute = require('./routes/saledetails.route');


//const db = require('./models');

const app = express();

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
app.use('/api/customers', customersRoute);
app.use('/api/products', productsRoute);
app.use('/api/sales', salesRoute);
app.use('/api/saledetails', saledetailsRoute);
//app.use('/api', require('./api'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
