import { FC } from 'react';
import styles from './ShowPasswordBtn.module.css';
import closeEyeIco from '/eye-close.svg';
import openEyeIco from '/eye-open.svg';

interface IShowPasswordBtn {
	showPassword: () => void;
	isShowPassword: boolean;
}

const ShowPasswordBtn: FC<IShowPasswordBtn> = ({
	showPassword,
	isShowPassword
}) => {
	return (
		<button className={styles['eye-btn']} type='button' onClick={showPassword}>
			{isShowPassword ? (
				<img className={styles.eye} src={closeEyeIco} alt='Hide password' />
			) : (
				<img className={styles.eye} src={openEyeIco} alt='Show password' />
			)}
		</button>
	);
};

export default ShowPasswordBtn;
