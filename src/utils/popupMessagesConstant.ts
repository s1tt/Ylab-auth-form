export interface PopupMessage {
	title: string;
	message: string;
}

export interface Messages {
	SUCCESS_LOGIN: PopupMessage;
	REJECT_LOGIN: PopupMessage;
	SUCCESS_REGISTRATION: PopupMessage;
	RESTORE_PASSWORD: PopupMessage;
	UNKNOWN: PopupMessage;
}

const messages: Messages = {
	SUCCESS_LOGIN: {
		title: 'Success Login',
		message: 'You have successfully logged in.'
	},
	REJECT_LOGIN: {
		title: 'Login Failed',
		message: 'Incorrect username or password.'
	},
	SUCCESS_REGISTRATION: {
		title: 'Success Registration',
		message: 'You have successfully registered.'
	},
	RESTORE_PASSWORD: {
		title: 'Restore Password',
		message: 'Please use email: test@test.com; password: test.'
	},
	UNKNOWN: {
		title: 'Unknown',
		message: 'Something went wrong :('
	}
};

export const getPopupMessage = (constant: string) => {
	switch (constant) {
		case 'SUCCESS_LOGIN':
			return messages.SUCCESS_LOGIN;
		case 'REJECT_LOGIN':
			return messages.REJECT_LOGIN;
		case 'SUCCESS_REGISTRATION':
			return messages.SUCCESS_REGISTRATION;
		case 'RESTORE_PASSWORD':
			return messages.RESTORE_PASSWORD;
		default:
			return messages.UNKNOWN;
	}
};
