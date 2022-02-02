//Enable usage of express nodejs web application framework we need to import this for creation of express application
const express = require('express');
//Enables the usage of json parsing middleware, allows us to read json from any requests with json stuff within the body.
const bodyParser = require('body-parser');
//Enables usage of our routing from our custom routing module.
const routes = require("./routes")
//Module for node.js=>mongodb connection
const mongoose = require('mongoose');
//Connection string to db
const connString = "mongodb+srv://mongoman:root@cluster0.m76d2.mongodb.net/CarDB?retryWrites=true&w=majority";
const app = express();
//Change to port you wish to use, but this port should be fine too.
const port = 3000;

app.use(bodyParser.json());
//Use the router from the routes.js module.
app.use('/', routes);

//DB connection
mongoose.connect(connString, {useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});