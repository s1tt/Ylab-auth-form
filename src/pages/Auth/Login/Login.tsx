import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthQuestion from '../../../components/Auth/AuthQuestion/AuthQuestion';
import AuthWelcomeMessage from '../../../components/Auth/AuthWelcomeMessage/AuthWelcomeMessage';
import Button from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Input from '../../../components/Input/Input';
import { LoaderContext } from '../../../contexts/LoaderContext';
import { PopupContext } from '../../../contexts/PopupContext';
import { akaLogin } from '../../../utils/api';
import { getPopupMessage } from '../../../utils/popupMessagesConstant';
import { emailValidation, passwordValidation } from '../../../utils/validation';
import styles from './Login.module.css';

export interface ILoginFormData {
	email: string;
	password: string;
	isRemember: boolean;
}

const Login = () => {
	const { setIsLoading } = useContext(LoaderContext);
	const { openPopup } = useContext(PopupContext);
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset
	} = useForm<ILoginFormData>({
		mode: 'onChange'
	});

	const submitForm: SubmitHandler<ILoginFormData> = data => {
		setIsLoading(true);
		akaLogin(data)
			.then(res => {
				if (res.status === 200) {
					openPopup(getPopupMessage('SUCCESS_LOGIN'));
				}
			})
			.catch(err => {
				openPopup(getPopupMessage('REJECT_LOGIN'));
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
				reset();
			});
	};

	return (
		<>
			<AuthWelcomeMessage title='Sign in to' message='Lorem Ipsum is simply ' />
			<form
				className={styles.form}
				onSubmit={handleSubmit(submitForm)}
				noValidate
			>
				<div className={styles.inputs}>
					<Input
						id='email'
						register={{ ...register('email', emailValidation) }}
						label='Email'
						type='email'
						placeholder='Enter your email'
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
				</div>
				<div className={styles.details}>
					<Checkbox
						id='isRemember'
						label='Remember me'
						type='checkbox'
						register={{ ...register('isRemember') }}
					/>
					<Link className={styles['forgot-password']} to={'/auth/restore'}>
						Forgot Password?
					</Link>
				</div>
				<Button disabled={!isValid}>Login</Button>
			</form>
			<AuthQuestion
				question='Don’t have an Account?'
				textOnLink='Register'
				link='/auth/register'
			/>
		</>
	);
};

export default Login;
