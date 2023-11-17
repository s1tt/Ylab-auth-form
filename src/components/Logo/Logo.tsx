import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.link} to={'/'}>
				<h1 className={styles.logo}>Logo</h1>
			</Link>
		</header>
	);
};

export default Logo;
