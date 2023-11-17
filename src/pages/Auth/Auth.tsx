import { Outlet } from 'react-router-dom';
import AuthBox from '../../components/Auth/AuthBox/AuthBox';
import Logo from '../../components/Logo/Logo';
import styles from './Auth.module.css';
import image from '/image.svg';

const Auth = () => {
	return (
		<>
			<Logo />
			<main className={styles.content}>
				<AuthBox>
					<Outlet />
				</AuthBox>
				<div className={styles['img-wrapper']}>
					<img className={styles.img} src={image} alt='Main image' />
				</div>
			</main>
		</>
	);
};

export default Auth;
