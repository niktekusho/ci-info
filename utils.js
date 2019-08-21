const areAllEnvironmentVariablesDefined = (...variableNames) => currentEnvs => {
	// No environment variables: just return false
	if (currentEnvs === null || currentEnvs === undefined) {
		return false;
	}

	// Environment variables must be an object
	const currentEnvsType = typeof currentEnvs;
	if (currentEnvsType !== 'object') {
		throw new TypeError(`Expected type for current environment variables is 'object', received '${currentEnvsType}'.`);
	}

	return variableNames.every(varName => Boolean(currentEnvs[varName]));
};

const areAnyEnvironmentVariablesDefined = (...variableNames) => currentEnvs => {
	// No environment variables: just return false
	if (currentEnvs === null || currentEnvs === undefined) {
		return false;
	}

	// Environment variables must be an object
	const currentEnvsType = typeof currentEnvs;
	if (currentEnvsType !== 'object') {
		throw new TypeError(`Expected type for current environment variables is 'object', received '${currentEnvsType}'.`);
	}

	// At least one env var must be defined
	for (const variableName of variableNames) {
		if (currentEnvs[variableName]) {
			return true;
		}
	}

	return false;
};

const isEnvironmentVariableDefined = variableName => currentEnvs => {
	// No environment variables: just return false
	if (currentEnvs === null || currentEnvs === undefined) {
		return false;
	}

	// Environment variables must be an object
	const currentEnvsType = typeof currentEnvs;
	if (currentEnvsType !== 'object') {
		throw new TypeError(`Expected type for current environment variables is 'object', received '${currentEnvsType}'.`);
	}

	return Boolean(currentEnvs[variableName]);
};

const isEnvironmentVariableEqualTo = (variableName, equalsTo) => currentEnvs => {
	// No environment variables: just return false
	if (currentEnvs === null || currentEnvs === undefined) {
		return false;
	}

	// Environment variables must be an object
	const currentEnvsType = typeof currentEnvs;
	if (currentEnvsType !== 'object') {
		throw new TypeError(`Expected type for current environment variables is 'object', received '${currentEnvsType}'.`);
	}

	// If the environment variable does not exist, return false.
	// At the moment null is allowed as a notEqualsTo value.
	const variableValue = currentEnvs[variableName];
	if (variableValue === undefined) {
		return false;
	}

	return currentEnvs[variableName] === equalsTo;
};

const isEnvironmentVariableNotEqualTo = (variableName, notEqualsTo) => currentEnvs => {
	// No environment variables: just return false
	if (currentEnvs === null || currentEnvs === undefined) {
		return false;
	}

	// Environment variables must be an object
	const currentEnvsType = typeof currentEnvs;
	if (currentEnvsType !== 'object') {
		throw new TypeError(`Expected type for current environment variables is 'object', received '${currentEnvsType}'.`);
	}

	// If the environment variable does not exist, return false.
	// At the moment null is allowed as a notEqualsTo value.
	const variableValue = currentEnvs[variableName];
	if (variableValue === undefined) {
		return false;
	}

	return currentEnvs[variableName] !== notEqualsTo;
};

module.exports = {
	areAllEnvironmentVariablesDefined,
	areAnyEnvironmentVariablesDefined,
	isEnvironmentVariableDefined,
	isEnvironmentVariableEqualTo,
	isEnvironmentVariableNotEqualTo
};
