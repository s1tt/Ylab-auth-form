import { FC, ReactNode } from 'react';
import styles from './AuthBox.module.css';

interface IAuthBox {
	children: ReactNode;
}

const AuthBox: FC<IAuthBox> = ({ children }) => {
	return (
		<div className={styles['auth-box']}>
			<h2 className={styles.welcome}>Welcome!</h2>
			{children}
		</div>
	);
};

export default AuthBox;
