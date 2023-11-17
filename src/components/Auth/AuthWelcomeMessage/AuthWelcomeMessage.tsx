import { FC } from 'react';
import styles from './AuthWelcomeMessage.module.css';

interface IAuthWelcomeMessage {
	title: string;
	message: string;
}

const AuthWelcomeMessage: FC<IAuthWelcomeMessage> = ({ title, message }) => {
	return (
		<>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{message}</p>
		</>
	);
};

export default AuthWelcomeMessage;
