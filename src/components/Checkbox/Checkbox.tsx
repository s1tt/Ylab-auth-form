import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Checkbox.module.css';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	type: 'checkbox';
	register: UseFormRegisterReturn;
}

const Checkbox = ({ label, register, ...props }: ICheckbox) => {
	return (
		<label className={styles.label} htmlFor={props.id}>
			<input className={styles.input} {...props} {...register} />
			<span className={styles.checkbox}>{label}</span>
		</label>
	);
};

export default Checkbox;
