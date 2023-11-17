import { ReactNode } from 'react';
import styles from './SecondButton.module.css';

interface ISecondButton {
	children: ReactNode;
	onClick: () => void;
}

const SecondButton = ({ children, onClick }: ISecondButton) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default SecondButton;
