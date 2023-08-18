import axios from 'axios';

class ApiServices {
	constructor() {
		this.api = axios.create( {
			baseURL: import.meta.env.VITE_APP_BACKEND_URI || 'http://localhost:5005',
		} );
	}

	getData() {
		return this.api.get( '/api' );
	}

	postData( data ) {
		return this.api.post( '/api', { content: data } );
	}

	updateData( data ) {
		return this.api.put( `/api/${data.updateID}`, { content: data.content } );
	}

	deleteData( deleteID ) {
		return this.api.delete( `/api/${deleteID}` );
	}
}

const apiService = new ApiServices();
export default apiService;
