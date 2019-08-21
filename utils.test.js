const {
	areAllEnvironmentVariablesDefined,
	areAnyEnvironmentVariablesDefined,
	isEnvironmentVariableDefined,
	isEnvironmentVariableEqualTo,
	isEnvironmentVariableNotEqualTo
} = require('./utils');

describe('isEnvironmentVariableDefined tests', () => {
	const isTestDefined = isEnvironmentVariableDefined('test');

	it('should return `false` if the current environment variables are not defined', () => {
		expect(isTestDefined(undefined)).toStrictEqual(false);
		expect(isTestDefined(null)).toStrictEqual(false);
	});

	it('should throw if the current environment variables are not an object', () => {
		expect(() => isTestDefined('test')).toThrowError('Expected type for current environment variables is \'object\', received \'string\'.');
		expect(() => isTestDefined(1)).toThrowError('Expected type for current environment variables is \'object\', received \'number\'.');
		expect(() => isTestDefined(false)).toThrowError('Expected type for current environment variables is \'object\', received \'boolean\'.');
	});

	it('should return `false` if the current environment variables do not contain the expected variable name', () => {
		expect(isTestDefined({SOME_ENV: true}, 'test')).toStrictEqual(false);
	});

	it('should return `true` if the current environment variables contain the expected variable name', () => {
		const isSomeEnvDefined = isEnvironmentVariableDefined('SOME_ENV');

		expect(isSomeEnvDefined({SOME_ENV: true})).toStrictEqual(true);
	});
});

describe('isEnvironmentVariableNotEqualTo tests', () => {
	const isTestNotEqualToFalse = isEnvironmentVariableNotEqualTo('test', false);

	it('should return `false` if the current environment variables are not defined', () => {
		expect(isTestNotEqualToFalse(undefined)).toStrictEqual(false);
		expect(isTestNotEqualToFalse(null)).toStrictEqual(false);
	});

	it('should throw if the current environment variables are not an object', () => {
		expect(() => isTestNotEqualToFalse('test')).toThrowError('Expected type for current environment variables is \'object\', received \'string\'.');
		expect(() => isTestNotEqualToFalse(1)).toThrowError('Expected type for current environment variables is \'object\', received \'number\'.');
		expect(() => isTestNotEqualToFalse(false)).toThrowError('Expected type for current environment variables is \'object\', received \'boolean\'.');
	});

	it('should return `false` if the current environment variables do not contain the expected variable name', () => {
		expect(isTestNotEqualToFalse({SOME_ENV: false})).toStrictEqual(false);
	});

	it('should return `false` if the current environment variables contain the expected variable name with the specifed value', () => {
		expect(isTestNotEqualToFalse({test: false})).toStrictEqual(false);
	});

	it('should return `true` if the current environment variables contain the expected variable name with a different value', () => {
		expect(isTestNotEqualToFalse({test: true})).toStrictEqual(true);
	});
});

describe('isEnvironmentVariableEqualTo tests', () => {
	const isTestEqualToFalse = isEnvironmentVariableEqualTo('test', false);

	it('should return `false` if the current environment variables are not defined', () => {
		expect(isTestEqualToFalse(undefined)).toStrictEqual(false);
		expect(isTestEqualToFalse(null)).toStrictEqual(false);
	});

	it('should throw if the current environment variables are not an object', () => {
		expect(() => isTestEqualToFalse('test')).toThrowError('Expected type for current environment variables is \'object\', received \'string\'.');
		expect(() => isTestEqualToFalse(1)).toThrowError('Expected type for current environment variables is \'object\', received \'number\'.');
		expect(() => isTestEqualToFalse(false)).toThrowError('Expected type for current environment variables is \'object\', received \'boolean\'.');
	});

	it('should return `false` if the current environment variables do not contain the expected variable name', () => {
		expect(isTestEqualToFalse({SOME_ENV: false})).toStrictEqual(false);
	});

	it('should return `true` if the current environment variables contain the expected variable name with the specifed value', () => {
		expect(isTestEqualToFalse({test: false})).toStrictEqual(true);
	});

	it('should return `false` if the current environment variables contain the expected variable name with a different value', () => {
		expect(isTestEqualToFalse({test: true})).toStrictEqual(false);
	});
});

describe('areAllEnvironmentVariablesDefined tests', () => {
	const areTestsDefined = areAllEnvironmentVariablesDefined('test', 'tests');

	it('should return `false` if the current environment variables are not defined', () => {
		expect(areTestsDefined(undefined)).toStrictEqual(false);
		expect(areTestsDefined(null)).toStrictEqual(false);
	});

	it('should throw if the current environment variables are not an object', () => {
		expect(() => areTestsDefined('test')).toThrowError('Expected type for current environment variables is \'object\', received \'string\'.');
		expect(() => areTestsDefined(1)).toThrowError('Expected type for current environment variables is \'object\', received \'number\'.');
		expect(() => areTestsDefined(false)).toThrowError('Expected type for current environment variables is \'object\', received \'boolean\'.');
	});

	it('should return `false` if the current environment variables do not contain all the expected variable names', () => {
		expect(areTestsDefined({test: true})).toStrictEqual(false);
		expect(areTestsDefined({tests: true})).toStrictEqual(false);
	});

	it('should return `true` if the current environment variables contain all the expected variable names', () => {
		expect(areTestsDefined({test: true, tests: true})).toStrictEqual(true);
	});
});

describe('areAnyEnvironmentVariablesDefined tests', () => {
	const areTestsDefined = areAnyEnvironmentVariablesDefined('test', 'tests');

	it('should return `false` if the current environment variables are not defined', () => {
		expect(areTestsDefined(undefined)).toStrictEqual(false);
		expect(areTestsDefined(null)).toStrictEqual(false);
	});

	it('should throw if the current environment variables are not an object', () => {
		expect(() => areTestsDefined('test')).toThrowError('Expected type for current environment variables is \'object\', received \'string\'.');
		expect(() => areTestsDefined(1)).toThrowError('Expected type for current environment variables is \'object\', received \'number\'.');
		expect(() => areTestsDefined(false)).toThrowError('Expected type for current environment variables is \'object\', received \'boolean\'.');
	});

	it('should return `true` if the current environment variables do contain at least one of the expected variable names', () => {
		expect(areTestsDefined({test: true})).toStrictEqual(true);
		expect(areTestsDefined({tests: true})).toStrictEqual(true);
	});

	it('should return `true` if the current environment variables contain all the expected variable names', () => {
		expect(areTestsDefined({test: true, tests: true})).toStrictEqual(true);
	});
});

