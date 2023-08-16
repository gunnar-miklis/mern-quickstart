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
		return this.api.post( '/api', data );
	}

	updateData( data ) {
		return this.api.put( '/api', data );
	}

	deleteData() {
		return this.api.delete( '/api' );
	}
}

const apiService = new ApiServices();
export default apiService;
