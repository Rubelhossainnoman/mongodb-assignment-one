/**
 * Package init....
 */
const express = require('express');
const colors = require('colors');
const uc = require('upper-case');
const env = require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const routers = require('./routes/student');
const connectWithMongoDB = require('./config/db');

/**
 * Port init...
 */
const port = process.env.PORT || 4040;

/**
 * Express init...
 */
const app = express();

/**
 * From data management...
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * Set public foulder...
 */
app.use(express.static("public"));

/**
 * Set express ejs engine...
 */
app.set('view engine', 'ejs');

/**
 * use express layouts...
 */
app.use(expressLayouts);

/**
 * Set express layout...
 */
app.set('layout','layouts/app');

/**
 * Manage routing system...
 */
app.use('/students', routers);

/**
 * Create server here...
 */
app.listen(port, (req,res) =>{
    connectWithMongoDB();
    console.log(uc.upperCase(`This server is running on port ${port}`).bgGreen.white);
})