const regExForEmail = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/i;

export const emailValidation = {
	required: 'Required field',
	pattern: {
		value: regExForEmail,
		message: 'incorrect Email'
	}
};

export const passwordValidation = {
	required: 'Required field',
	minLength: {
		value: 3,
		message: 'min length must be 3'
	},
	maxLength: {
		value: 10,
		message: 'max length must be 10'
	}
};

export const nameValidation = {
	required: 'Required field',
	minLength: {
		value: 3,
		message: 'min length must be 3'
	},
	maxLength: {
		value: 10,
		message: 'max length must be 3'
	}
};
