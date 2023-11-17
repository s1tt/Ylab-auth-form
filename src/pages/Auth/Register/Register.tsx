import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthQuestion from '../../../components/Auth/AuthQuestion/AuthQuestion';
import AuthWelcomeMessage from '../../../components/Auth/AuthWelcomeMessage/AuthWelcomeMessage';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { LoaderContext } from '../../../contexts/LoaderContext';
import { PopupContext } from '../../../contexts/PopupContext';
import { akaRegister } from '../../../utils/api';
import { getPopupMessage } from '../../../utils/popupMessagesConstant';
import {
	emailValidation,
	nameValidation,
	passwordValidation
} from '../../../utils/validation';
import styles from './Register.module.css';

export interface IRegisterFormData {
	email: string;
	name: string;
	password: string;
	confirmPassword: string;
}

const Register = () => {
	const { openPopup } = useContext(PopupContext);
	const { setIsLoading } = useContext(LoaderContext);
	const {
		watch,
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset
	} = useForm<IRegisterFormData>({
		mode: 'onChange'
	});

	const submitForm: SubmitHandler<IRegisterFormData> = data => {
		setIsLoading(true);
		akaRegister(data)
			.then(res => {
				if (res.status === 200) {
					openPopup(getPopupMessage('SUCCESS_REGISTRATION'));
				}
			})
			.catch(err => console.log(err))
			.finally(() => {
				setIsLoading(false);
				reset();
			});
	};

	return (
		<>
			<AuthWelcomeMessage title='Sign up to' message='Lorem Ipsum is simply ' />
			<form
				className={styles.form}
				onSubmit={handleSubmit(submitForm)}
				noValidate
			>
				<div className={styles.inputs}>
					<Input
						id='email'
						label='Email'
						type='email'
						placeholder='Enter your user email'
						register={{ ...register('email', emailValidation) }}
						errors={errors}
					/>
					<Input
						id='name'
						label='User name'
						type='text'
						placeholder='Enter your user name'
						register={{ ...register('name', nameValidation) }}
						errors={errors}
					/>
					<Input
						id='password'
						label='Password'
						type='password'
						placeholder='Enter your Password'
						register={{
							...register('password', passwordValidation)
						}}
						errors={errors}
					/>
					<Input
						id='confirmPassword'
						label='Confirm password'
						type='password'
						placeholder='Confirm your Password'
						register={{
							...register('confirmPassword', {
								...passwordValidation,
								validate: value =>
									value === watch('password') || "Passwords don't match."
							})
						}}
						errors={errors}
					/>
				</div>
				<Button disabled={!isValid}>Register</Button>
			</form>
			<AuthQuestion
				question='Already have an Account?'
				textOnLink='Login'
				link='/auth/login'
			/>
		</>
	);
};

export default Register;
