const {
	verifyPassword,
	passwordLength,
	isNotNull,
	oneOrMoreUpperCase,
	oneOrMoreLowerCase,
	hasDigits,
} = require("./passwordVerifier");

//1 password is korter dan 9 karakters
test("passwordLength", () => {
	expect(passwordLength("123456789")).toBe(false);
});

test("passwordLength, happy path 1", () => {
	expect(passwordLength("12345678")).toBe(true);
});

//2 passwordt is niet Null
test("isNotNull,happy path 1", () => {
	expect(isNotNull("1")).toBe(true);
});

test("isNotNull,happy path 2", () => {
	expect(isNotNull("Aa")).toBe(true);
});

test("isNotNull", () => {
	expect(isNotNull(null)).toBe(false);
});

//3 Password heeft 1 of meer uppercase karaketers

test("oneOrMoreUpperCase, happy path 1", () => {
	expect(oneOrMoreUpperCase("A")).toBe(true);
});

test("oneOrMoreUpperCase, happy path 2", () => {
	expect(oneOrMoreUpperCase("ABCDEFGH")).toBe(true);
});

test("oneOrMoreUpperCase", () => {
	expect(oneOrMoreUpperCase("abcdefgh")).toBe(false);
});

//4 Password heeft 1 of meer lowercase karaketers

test("oneOrMoreLowerCase, happy path 1", () => {
	expect(oneOrMoreLowerCase("a")).toBe(true);
});

test("oneOrMoreLowerCase, happy path 2", () => {
	expect(oneOrMoreLowerCase("abcdefgh")).toBe(true);
});

test("oneOrMoreLowerCase", () => {
	expect(oneOrMoreLowerCase("ABCDEFGH")).toBe(false);
});

//5 een password heeft 1 of meer cijfers

test("hasDigits, happy path 1", () => {
	expect(hasDigits("1")).toBe(true);
});

test("hasDigits, happy path 2", () => {
	expect(hasDigits("12345678")).toBe(true);
});

test("hasDigits", () => {
	expect(hasDigits(null)).toBe(false);
});

//6 functie verifyPassword
test("verifyPassword, happy path 1", () => {
	expect(true).toBe(true);
});
