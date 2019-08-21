const ciInfo = require('.');

describe('\'detectVendor\' tests', () => {
	const {detectVendor} = ciInfo;

	it('should throw when the specified environment variable object is not of type object', () => {
		expect(() => detectVendor('')).toThrowError('Environment variables must be of type \'object\', but received type \'string\'.');
	});

	it('should return an empty array if the specified environment variables object is "empty"', () => {
		expect(detectVendor({})).toHaveLength(0);
	});

	it('should return an empty array if the specified environment variables object contains too generic variables', () => {
		expect(detectVendor({IS_CI: true})).toHaveLength(0);
	});

	it('should return a not empty array if the specified environment variables object contains multiple variables', () => {
		const someVendors = detectVendor({GITLAB_CI: true, JENKINS_URL: 'some url', BUILD_ID: 1});
		expect(someVendors).toHaveLength(2);
		expect(someVendors[0].constant).toStrictEqual('GITLAB');
		expect(someVendors[1].constant).toStrictEqual('JENKINS');
	});

	it('should return an array containing a single object if the specified environment variables object suggests both the CI and PR environment of a vendor', () => {
		const someVendors = detectVendor({GITLAB_CI: true, JENKINS_URL: 'some url', BUILD_ID: 1, CHANGE_ID: 'some change'});
		expect(someVendors).toHaveLength(1);
		expect(someVendors[0].constant).toStrictEqual('JENKINS');
	});
});

describe('isCI tests', () => {
	const {isCI} = ciInfo;

	it('should throw when the specified environment variable object is not of type object', () => {
		expect(() => isCI('')).toThrowError('Environment variables must be of type \'object\', but received type \'string\'.');
	});

	it('should return true if the specified enviornment variable object defines "CI"', () => {
		expect(isCI({CI: true})).toStrictEqual(true);
	});

	it('should return true if the specified enviornment variable object defines "CONTINUOUS_INTEGRATION"', () => {
		expect(isCI({CONTINUOUS_INTEGRATION: true})).toStrictEqual(true);
	});

	it('should return true if the specified enviornment variable object defines "BUILD_NUMBER"', () => {
		expect(isCI({BUILD_NUMBER: true})).toStrictEqual(true);
	});

	it('should return true if the specified enviornment variable object defines "RUN_ID"', () => {
		expect(isCI({RUN_ID: true})).toStrictEqual(true);
	});

	it('should return false if the specified enviornment variable object does not define one of "CI", "CONTINUOUS_INTEGRATION","BUILD_NUMBER" and "RUN_ID"', () => {
		expect(isCI({SOME_ENV: true})).toStrictEqual(false);
	});
});

describe('isPR tests', () => {
	const {isPR} = ciInfo;

	it('should throw when the specified environment variable object is not of type object', () => {
		expect(() => isPR('')).toThrowError('Environment variables must be of type \'object\', but received type \'string\'.');
	});

	it('should return true if the specified enviornment variable object defines "BITBUCKET_PR_ID" (single example)', () => {
		expect(isPR({BITBUCKET_PR_ID: true})).toStrictEqual(true);
	});

	it('should return false if the specified enviornment variable object does not define any of the specific environment variables', () => {
		expect(isPR({SOME_ENV: true})).toStrictEqual(false);
	});
});

// More tests are in the specific file
describe('vendors tests', () => {
	it('should be an object', () => {
		expect(ciInfo.vendors).toBeDefined();
	});
});

// These are tests that should run only on CI
describe('CI tests', () => {
	const {detectVendor, isCI} = ciInfo;

	it('should detect Travis CI', () => {
		if (isCI()) {
			expect(detectVendor()[0].constant).toStrictEqual('TRAVIS');
		}
	});
});

describe('functions mockability', () => {
	let isCIMock = null;
	let isPRMock = null;
	let detectVendorMock = null;

	beforeAll(() => {
		isCIMock = jest.spyOn(ciInfo, 'isCI').mockImplementation(() => false);
		isPRMock = jest.spyOn(ciInfo, 'isPR').mockImplementation(() => true);

		const {vendors} = ciInfo;
		detectVendorMock = jest.spyOn(ciInfo, 'detectVendor').mockImplementation(() => [vendors.DSARI]);
	});

	afterAll(() => {
		isCIMock.mockRestore();
		isPRMock.mockRestore();
		detectVendorMock.mockRestore();
	});

	it('isCI should now return always false', () => {
		const {isCI} = ciInfo;
		expect(isCI({CI: true})).toStrictEqual(false);
		expect(isCI(null)).toStrictEqual(false);
		expect(isCI(1)).toStrictEqual(false);
	});

	it('isPR should now return always true', () => {
		const {isPR} = ciInfo;
		expect(isPR({CI: true})).toStrictEqual(true);
		expect(isPR(null)).toStrictEqual(true);
		expect(isPR(1)).toStrictEqual(true);
	});

	it('detectVendor should now return always \'DSARI\'', () => {
		const {detectVendor} = ciInfo;
		expect(detectVendor({CI: true})[0].constant).toStrictEqual('DSARI');
		expect(detectVendor(null)[0].constant).toStrictEqual('DSARI');
		expect(detectVendor(1)[0].constant).toStrictEqual('DSARI');
	});
});
