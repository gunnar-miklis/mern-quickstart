import apiService from '../services/api';
import { useState, useEffect } from 'react';

export default function Home() {
	const [ apiResponse, setApiResponse ] = useState( {} );

	useEffect( () => {
		( async function getData() {
			try {
				const response = await apiService.getData();
				const data = response.data;
				setApiResponse( data );
			} catch ( err ) {
				console.error( err );
			}
		} )();
	}, [] );
	function sendData() {
		( async () => {
			try {
				const response = await apiService.postData();
				const data = response.data;
				setApiResponse( data );
			} catch ( err ) {
				console.error( err );
			}
		} )();
	}
	function updateData() {
		( async () => {
			try {
				const response = await apiService.updateData();
				const data = response.data;
				setApiResponse( data );
			} catch ( err ) {
				console.error( err );
			}
		} )();
	}
	function deleteData() {
		( async () => {
			try {
				const response = await apiService.deleteData();
				const data = response.data;
				setApiResponse( data );
			} catch ( err ) {
				console.error( err );
			}
		} )();
	}

	return (
		<>
			<h1>Home</h1>
			<p>Hi and welcome!</p>

			{ !Object.keys( apiResponse ).length ?
				<h3>No API data available</h3> :
				<h3>{ apiResponse.message }</h3>
			}

			<a href=''><button>Get (on Page Refresh)</button></a>
			<button onClick={()=>sendData()}>Send</button>
			<button onClick={()=>updateData()}>Update</button>
			<button onClick={()=>deleteData()}>Delete</button>
		</>
	);
}
