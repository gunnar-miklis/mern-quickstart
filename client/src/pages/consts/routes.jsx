import Home from '../Home';
import Error from '../Error';

export const routes = [
	{
		path: '/',
		element: <Home/>,
	},
	{
		path: '/home',
		element: <Home/>,
	},
	{
		path: '*',
		element: <Error/>,
	},
];
