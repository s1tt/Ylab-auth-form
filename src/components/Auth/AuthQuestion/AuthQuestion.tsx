import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthQuestion.module.css';

interface IAuthQuestion {
	question: string;
	textOnLink: string;
	link: string;
}

const AuthQuestion: FC<IAuthQuestion> = ({ question, textOnLink, link }) => {
	return (
		<p className={styles.question}>
			{question}{' '}
			<Link className={styles['question-link']} to={link}>
				{textOnLink}
			</Link>
		</p>
	);
};

export default AuthQuestion;
