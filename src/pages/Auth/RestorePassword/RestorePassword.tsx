import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthWelcomeMessage from '../../../components/Auth/AuthWelcomeMessage/AuthWelcomeMessage';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import SecondButton from '../../../components/SecondButton/SecondButton';
import { LoaderContext } from '../../../contexts/LoaderContext';
import { PopupContext } from '../../../contexts/PopupContext';
import { akaRestorePassword } from '../../../utils/api';
import { getPopupMessage } from '../../../utils/popupMessagesConstant';
import { emailValidation, nameValidation } from '../../../utils/validation';
import styles from './RestorePassword.module.css';

export interface IRestoreFormData {
	email: string;
	name: string;
}

const RestorePassword = () => {
	const { openPopup } = useContext(PopupContext);
	const { setIsLoading } = useContext(LoaderContext);
	const navigate = useNavigate();
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset
	} = useForm<IRestoreFormData>({
		mode: 'onChange'
	});

	const submitForm: SubmitHandler<IRestoreFormData> = data => {
		setIsLoading(true);
		akaRestorePassword(data)
			.then(res => {
				if (res.status === 200) {
					openPopup(getPopupMessage('RESTORE_PASSWORD'));
				}
			})
			.catch(err => console.log(err))
			.finally(() => {
				setIsLoading(false);
				reset();
			});
	};

	const goBack = () => navigate(-1);
	return (
		<>
			<AuthWelcomeMessage
				title='Restore Password'
				message='Lorem Ipsum is simply '
			/>
			<form
				className={styles.form}
				onSubmit={handleSubmit(submitForm)}
				noValidate
			>
				<div className={styles.inputs}>
					<Input
						id='name'
						label='User name'
						type='text'
						placeholder='Enter your user name'
						register={{ ...register('name', nameValidation) }}
						errors={errors}
					/>
					<Input
						id='email'
						register={{ ...register('email', emailValidation) }}
						label='Email'
						type='email'
						placeholder='Enter your email'
						errors={errors}
					/>
				</div>
				<Button disabled={!isValid}>Restore Password</Button>
			</form>
			<SecondButton onClick={goBack}>Back</SecondButton>
		</>
	);
};

export default RestorePassword;
