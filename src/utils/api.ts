import { ILoginFormData } from '../pages/Auth/Login/Login';
import { IRegisterFormData } from '../pages/Auth/Register/Register';
import { IRestoreFormData } from '../pages/Auth/RestorePassword/RestorePassword';
interface IAkaLogin {
	status: number;
	message: string;
}

interface IAkaRegister {
	status: number;
	message: string;
}

interface IAkaRestorePassword {
	status: number;
	email: string;
	password: string;
	user: string;
}

export const akaLogin = async (data: ILoginFormData): Promise<IAkaLogin> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (data.email === 'test@test.com' && data.password === 'test') {
				resolve({ status: 200, message: 'Login' });
			} else {
				reject({
					status: 401,
					message: 'Incorrect login or password'
				});
			}
		}, 2000);
	});
};

export const akaRegister = async (
	data: IRegisterFormData
): Promise<IAkaRegister> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({ status: 200, message: `Welcome, ${data.name}!` });
		}, 2000);
	});
};

export const akaRestorePassword = async (
	data: IRestoreFormData
): Promise<IAkaRestorePassword> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				status: 200,
				email: `test@test.com`,
				password: 'test',
				user: data.name
			});
		}, 2000);
	});
};
