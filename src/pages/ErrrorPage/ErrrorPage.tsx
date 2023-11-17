import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError
} from 'react-router-dom';
import SecondButton from '../../components/SecondButton/SecondButton';
import styles from './ErrrorPage.module.css';

export default function ErrorPage() {
	const error: unknown = useRouteError();
	const navigate = useNavigate();
	console.error(error);

	return (
		<div className={styles['error-page']}>
			<h1 className={styles.title}>Oops!</h1>
			<p className={styles.text}>Sorry, an unexpected error has occurred.</p>
			<p className={styles['error-message']}>
				{isRouteErrorResponse(error)
					? error.data?.message || error.statusText
					: 'Unknown error'}
			</p>
			<SecondButton onClick={() => navigate('./auth/login')}>
				Go to Login
			</SecondButton>
		</div>
	);
}
