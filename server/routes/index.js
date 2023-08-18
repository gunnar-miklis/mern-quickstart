const router = require( 'express' ).Router();

function logRequest( request, header ) {
	const data = {};
	data.method = request.method;
	data.origin = request.rawHeaders[header];
	data.url = request.url;
	data.params = request.params;
	data.body = request.body;
	return data;
}

router.get( '/', ( req, res, next ) => {
	const data = logRequest( req, 15 );
	console.log( data );

	res.status( 200 ).json( { message: 'Get Route called' } );
} );

router.post( '/', ( req, res, next ) => {
	const data = logRequest( req, 19 );
	console.log( data );

	res.status( 201 ).json( { message: 'Post Route called' } );
} );

router.put( '/:updateID', ( req, res, next ) => {
	const data = logRequest( req, 19 );
	console.log( data );

	res.status( 201 ).json( { message: 'Update Route called' } );
} );

router.delete( '/:deleteID', ( req, res, next ) => {
	const data = logRequest( req, 15 );
	console.log( data );

	res.status( 204 ).json( { message: 'Delete Route called' } );
} );

module.exports = router;
