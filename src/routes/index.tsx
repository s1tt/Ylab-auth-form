import { Navigate, createBrowserRouter } from 'react-router-dom';
import Auth from '../pages/Auth/Auth';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import RestorePassword from '../pages/Auth/RestorePassword/RestorePassword';
import ErrorPage from '../pages/ErrrorPage/ErrrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/auth/login' />,
		errorElement: <ErrorPage />
	},
	{
		path: '/auth',
		element: <Auth />,

		children: [
			{
				path: '',
				element: <Navigate to='login' replace />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			},
			{
				path: 'restore',
				element: <RestorePassword />
			}
		]
	}
]);
