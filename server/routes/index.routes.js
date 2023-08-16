const router = require( 'express' ).Router();

router.get( '/', ( req, res, next ) => {
	res.json( 'Server Response: Get Route called.' );
} );

router.post( '/', ( req, res, next ) => {
	res.json( 'Server Response: Post Route called.' );
} );

router.put( '/', ( req, res, next ) => {
	res.json( 'Server Response: Update Route called.' );
} );

router.delete( '/', ( req, res, next ) => {
	res.json( 'Server Response: Delete Route called.' );
} );

module.exports = router;
