//Enable usage of express nodejs web application framework we need to import this for creation of express application
const express = require('express');
//Enables the usage of json parsing middleware, allows us to read json from any requests with json stuff within the body.
const bodyParser = require('body-parser');
//Enables usage of our routing from our custom routing module.
const routes = require("./routes")

const app = express();
app.use(bodyParser.json());
//Use the router from the routes.js module.
app.use('/', routes);
//Change to port you wish to use, but this port should be fine too.
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});