
const vendors = require('./vendors');

// Throw if the environment variables is not of the expected type
const validateEnvs = envs => {
	const envsType = typeof envs;
	if (envsType !== 'object') {
		throw new TypeError(`Environment variables must be of type 'object', but received type '${envsType}'.`);
	}
};

// Shortcut function
// Instead of cycling through the vendors just check for the most common environment variables
const isCI = (envs = process.env) => {
	validateEnvs(envs);

	return envs.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
		envs.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
		envs.BUILD_NUMBER || // Jenkins, TeamCity
		envs.RUN_ID || // TaskCluster, dsari
		false;
};

// Here we need to cycle through the vendors to see if we find one environment that matches
const isPR = (envs = process.env) => {
	validateEnvs(envs);

	return Boolean(vendors.all.find(vendor => Boolean(vendor.detectPRFunction(envs))));
};

// Should return a list of possible vendors
const detectVendor = (envs = process.env) => {
	validateEnvs(envs);

	const matchingVendors = [];

	for (const vendor of vendors.all) {
		const isVendorCI = vendor.detectEnvFunction(envs);
		const rawIsVendorPR = vendor.detectPRFunction(envs);
		const isVendorPR = Boolean(rawIsVendorPR);
		// TODO: should be usuful for vendors' weighting
		// const isVendorPRSupported = rawIsVendorPR !== null;

		// We can be sure that this is the correct vendor
		if (isVendorCI && isVendorPR) {
			// Wrap the object to give a consistent interface to the client
			return [vendor];
		}

		// The environment variables for the CI part match
		// TODO: add a weight to each vendor?
		if (isVendorCI) {
			matchingVendors.push(vendor);
		}
	}

	return matchingVendors;
};

module.exports = {
	detectVendor,
	isCI,
	isPR,
	vendors // Reexport vendors
};
