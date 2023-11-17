import cn from 'classnames';
import { InputHTMLAttributes, useState } from 'react';
import { FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';
import ShowPasswordBtn from './ShowPasswordBtn/ShowPasswordBtn';

interface IInput extends InputHTMLAttributes<HTMLInputElement>, FieldValues {
	label: string;
	register: UseFormRegisterReturn;
}

const Input = ({ label, type, register, errors, ...props }: IInput) => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	const showPassword = () => setIsShowPassword(prev => !prev);
	return (
		<label className={styles.label} htmlFor={props.id}>
			<span>{label}</span>
			<div className={styles.inputContainer}>
				<input
					className={cn(styles.input, {
						[styles['input-validation-error']]: errors?.[register.name]
					})}
					{...register}
					{...props}
					type={isShowPassword ? 'text' : type}
				/>
				{type === 'password' && (
					<ShowPasswordBtn
						showPassword={showPassword}
						isShowPassword={isShowPassword}
					/>
				)}
			</div>
			{errors?.[register.name] && (
				<p className={styles['validation-error-message']}>
					{errors?.[register.name]?.message || 'Error'}
				</p>
			)}
		</label>
	);
};

export default Input;
