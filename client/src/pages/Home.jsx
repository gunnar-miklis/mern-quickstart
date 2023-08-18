import { useState, useEffect } from 'react';
import apiService from '../services/api';
import { homeStyles } from './homeStyles';
import { Box, Button, Link, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useParams } from 'react-router-dom';

export default function Home() {
	const [ apiResponse, setApiResponse ] = useState( {} );
	const { pageID } = useParams();

	useEffect( () => {
		( async function getData() {
			try {
				const response = await apiService.getData();
				setApiResponse( { data: response.data, status: response.status } );
			} catch ( err ) {
				setApiResponse( {} );
				console.error( err );
			}
		} )();
	}, [] );
	function sendData( content ) {
		( async () => {
			try {
				const response = await apiService.postData( content );
				setApiResponse( { data: response.data, status: response.status } );
			} catch ( err ) {
				setApiResponse( {} );
				console.error( err );
			}
		} )();
	}
	function updateData( content ) {
		( async () => {
			try {
				const response = await apiService.updateData( { updateID: 'updateID', content } );
				setApiResponse( { data: response.data, status: response.status } );
			} catch ( err ) {
				setApiResponse( {} );
				console.error( err );
			}
		} )();
	}
	function deleteData() {
		( async () => {
			try {
				const response = await apiService.deleteData( 'deleteID' );
				setApiResponse( { data: response.data, status: response.status } );
			} catch ( err ) {
				setApiResponse( {} );
				console.error( err );
			}
		} )();
	}

	return (
		<>
			<Box sx={homeStyles.box}>
				<Typography variant='h3'>Home</Typography>
			</Box>

			<Box sx={homeStyles.box}>
				{
					!Object.keys( apiResponse ).length ?
						<Typography variant='body1' color='error'>
							No API data fetched.
						</Typography>
						:
						<>
							<Typography variant='body1' color='primary'>
								Server Response: <em>{ apiResponse.data.message }</em>
							</Typography>
							<Typography variant='body1' color='primary'>
								Status Code: { apiResponse.status }
							</Typography>
						</>
				}

				<Link href=''>
					<Button
						variant='outlined'
						size='small'
						startIcon={<GetAppIcon/>}>
					Retrieve
					</Button>
				</Link>
				<Button
					onClick={()=>sendData( 'Client Data' )}
					variant='outlined'
					size='small'
					startIcon={<SendIcon/>}>
				Send
				</Button>
				<Button
					onClick={()=>updateData( 'Client Data' )}
					variant='outlined'
					size='small'
					startIcon={<RefreshIcon/>}>
				Update
				</Button>
				<Button
					onClick={()=>deleteData()}
					variant='outlined'
					size='small'
					startIcon={<DeleteIcon/>}>
				Delete
				</Button>
			</Box>
		</>
	);
}
