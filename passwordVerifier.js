const verifyPassword = (password) => {
	const requirements = [
		passwordLength,
		isNotNull,
		oneOrMoreUpperCase,
		oneOrMoreLowerCase,
		hasDigits,
	];
	const result = passwordLength(requirements) && oneOrMoreLowerCase(password);
	return result;
};

const isNotNull = (password) => password !== null;

const passwordLength = (password) => isNotNull && password.length <= 8;

const oneOrMoreUpperCase = (password) =>
	isNotNull && password.toLowerCase() !== password;

const oneOrMoreLowerCase = (password) =>
	isNotNull && password.toUpperCase() !== password;

const hasDigits = (password) => isNotNull && /\d/.test(password);

module.exports = {
	verifyPassword,
	passwordLength,
	isNotNull,
	oneOrMoreUpperCase,
	oneOrMoreLowerCase,
	hasDigits,
};
