/// <reference types="node" />

export namespace CiInfo {

	export interface CIVendor {
		/**
		 * Pretty-printable name of the CI Vendor.
		 * @example 'Travis CI' (Note the whitespace!)
		 */
		name: string,
		/**
		 * Internal "id" of the CI Vendor. This library enforces an uppercased format.
		 *
		 * @example 'TRAVIS'
		 */
		constant: string,
		/**
		 * Function that checks if the specified environment variables matches this vendor's required environment variables.
		 *
		 * @returns `true` if the current environment variables suggests that this vendor **could** be the one in use.
		 * @throws TypeError if the specified envs argument is not of type `'object'`.
		 */
		detectEnvFunction: (envs?: NodeJS.ProcessEnv) => boolean,
		/**
		 * Function that check if the specified environment variables matches this vendor's required environment variables for Pull Requests.
		 *
		 * @returns `true` if the current environment variables suggests that this vendor **could** be the one in use. This function returns `null` if the vendor does not provide a reliable way to check for a PR environment.
		 * @throws TypeError if the specified envs argument is not of type `'object'`.
		 */
		detectPRFunction: (envs?: NodeJS.ProcessEnv) => boolean | null,
	}
}

/**
 * Tries to detect which vendors match the specfied environment.
 *
 * @param envs Optional environment variables object. Defaults to `process.env`.
 *
 * @returns List of the vendors matching the specifed environment.
 */
export function detectVendor(envs?: NodeJS.ProcessEnv): CiInfo.CIVendor[];

/**
 * Returns whether the specified environment variables suggest a CI environment.
 *
 * @param envs Optional environment variables object. Defaults to `process.env`.
 *
 * @returns `true` if the specified environment *suggests* a CI environment.
 */
export function isCI(envs?: NodeJS.ProcessEnv): boolean;

/**
 * Returns whether the specified environment variables suggest a PR build in a CI environment.
 *
 * @param envs Optional environment variables object. Defaults to `process.env`.
 *
 * @returns `true` if the specified environment *suggests* a PR build in a CI environment.
 */
export function isPR(envs?: NodeJS.ProcessEnv): boolean;

/**
 * Object containing the supported CI vendors.
 */
export const vendors: {
	/**
	 * Array of all the supported CI vendors.
	 */
	readonly all: CiInfo.CIVendor[],

	/**
	 * [AppVeyor (http://www.appveyor.com/)](http://www.appveyor.com/)
	 */
	APPVEYOR: CiInfo.CIVendor,
	/**
	 * [AWS CodeBuild (https://aws.amazon.com/codebuild/)](https://aws.amazon.com/codebuild/)
	 */
	AWS_CODEBUILD: CiInfo.CIVendor,
	/**
	 * [Azure Pipelines (https://azure.microsoft.com/en-us/services/devops/pipelines/)](https://azure.microsoft.com/en-us/services/devops/pipelines/)
	 */
	AZURE_PIPELINES: CiInfo.CIVendor,
	/**
	 * [Bamboo (https://www.atlassian.com/software/bamboo)](https://www.atlassian.com/software/bamboo)
	 */
	BAMBOO: CiInfo.CIVendor,
	/**
	 * [Bitbucket Pipelines (https://bitbucket.org/product/features/pipelines)](https://bitbucket.org/product/features/pipelines)
	 */
	BITBUCKET: CiInfo.CIVendor,
	/**
	 * [Bitrise (https://www.bitrise.io/)](https://www.bitrise.io/)
	 */
	BITRISE: CiInfo.CIVendor,
	/**
	 * [Buddy (https://buddy.works/)](https://buddy.works/)
	 */
	BUDDY: CiInfo.CIVendor,
	/**
	 * [Buildkite (https://buildkite.com/)](https://buildkite.com/)
	 */
	BUILDKITE: CiInfo.CIVendor,
	/**
	 * [CircleCI (https://circleci.com/)](https://circleci.com/)
	 */
	CIRCLE: CiInfo.CIVendor,
	/**
	 * [Cirrus CI (https://cirrus-ci.org/)](https://cirrus-ci.org/)
	 */
	CIRRUS: CiInfo.CIVendor,
	/**
	 * [Codeship (https://codeship.com/)](https://codeship.com/)
	 */
	CODESHIP: CiInfo.CIVendor,
	/**
	 * [Drone (https://drone.io/)](https://drone.io/)
	 */
	DRONE: CiInfo.CIVendor,
	/**
	 * [dsari (https://github.com/rfinnie/dsari)](https://github.com/rfinnie/dsari)
	 */
	DSARI: CiInfo.CIVendor,
	/**
	 * [GitLab CI (https://about.gitlab.com/product/continuous-integration/)](https://about.gitlab.com/product/continuous-integration/)
	 */
	GITLAB: CiInfo.CIVendor,
	/**
	 * [GoCD (https://www.gocd.org/)](https://www.gocd.org/)
	 */
	GOCD: CiInfo.CIVendor,
	/**
	 * [Hudson (http://hudson-ci.org/)](http://hudson-ci.org/)
	 */
	HUDSON: CiInfo.CIVendor,
	/**
	 * [Jenkins (https://jenkins.io/)](https://jenkins.io/)
	 */
	JENKINS: CiInfo.CIVendor,
	/**
	 * [Netlify Build (https://www.netlify.com/products/build/)](https://www.netlify.com/products/build/)
	 */
	NETLIFY: CiInfo.CIVendor,
	/**
	 * [Nevercode (https://nevercode.io/)](https://nevercode.io/)
	 */
	NEVERCODE: CiInfo.CIVendor,
	/**
	 * [Sail CI (https://sail.ci/)](https://sail.ci/)
	 */
	SAIL: CiInfo.CIVendor,
	/**
	 * [Semaphore (https://semaphoreci.com/)](https://semaphoreci.com/)
	 */
	SEMAPHORE: CiInfo.CIVendor,
	/**
	 * [Shippable (https://www.shippable.com/)](https://www.shippable.com/)
	 */
	SHIPPABLE: CiInfo.CIVendor,
	/**
	 * [Strider CD (https://strider-cd.github.io/)](https://strider-cd.github.io/)
	 */
	STRIDER: CiInfo.CIVendor,
	/**
	 * [TaskCluster (https://docs.taskcluster.net/docs)](https://docs.taskcluster.net/docs)
	 */
	TASKCLUSTER: CiInfo.CIVendor,
	/**
	 * [TeamCity (https://www.jetbrains.com/teamcity/)](https://www.jetbrains.com/teamcity/)
	 */
	TEAMCITY: CiInfo.CIVendor,
	/**
	 * [Travis CI (https://travis-ci.com/)](https://travis-ci.com/)
	 */
	TRAVIS_CI: CiInfo.CIVendor
};
