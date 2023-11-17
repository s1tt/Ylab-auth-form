import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button: FC<IButton> = ({ children, disabled, type = 'submit' }) => {
	return (
		<button className={styles.btn} disabled={disabled} type={type}>
			{children}
		</button>
	);
};

export default Button;
