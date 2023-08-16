const express = require( 'express' );
const app = express();
require( 'dotenv' ).config();
require( './db' );
require( './config' )( app );

const indexRoutes = require( './routes/index' );
app.use( '/api', indexRoutes );
require( './error-handling' )( app );

module.exports = app;
