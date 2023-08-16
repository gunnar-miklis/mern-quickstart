const express = require( 'express' );
const app = express();
require( 'dotenv' ).config();
require( './db' );
require( './config' )( app );
require( './error-handling' )( app );


const indexRoutes = require( './routes/index' );
app.use( '/api', indexRoutes );

module.exports = app;
