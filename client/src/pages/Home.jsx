import apiService from '../services/api';
import { useState, useEffect } from 'react';

export default function Home() {
	const [ states, setStates ] = useState( [] );

	useEffect( () => {
		( async function getData() {
			try {
				const response = await apiService.getData();
				const data = response.data;
				setStates( [ { data } ] );
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
				setStates( [ { data } ] );
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
				setStates( [ { data } ] );
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
				setStates( [ { data } ] );
			} catch ( err ) {
				console.error( err );
			}
		} )();
	}

	return (
		<>
			<h1>Home</h1>
			<p>Hi and welcome!</p>

			{ !states.length ?
				<h3>No API data available</h3> :
				<h3>{ states[0].data }</h3>
			}

			<button onClick={()=>sendData()}>Send</button>
			<button onClick={()=>updateData()}>Update</button>
			<button onClick={()=>deleteData()}>Delete</button>
		</>
	);
}
