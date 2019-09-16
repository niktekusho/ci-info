const {
	areAllEnvironmentVariablesDefined,
	areAnyEnvironmentVariablesDefined,
	isEnvironmentVariableDefined,
	isEnvironmentVariableEqualTo,
	isEnvironmentVariableNotEqualTo
} = require('./utils');

const noopPR = () => null;

class CIVendor {
	constructor({name, constant, env, pr = noopPR}) {
		this.name = name;
		this.constant = constant.toUpperCase();
		this.detectEnvFunction = env;
		this.detectPRFunction = pr;
	}
}

// Keep these definitions in alphabetical order, thank you!
const AppVeyor = new CIVendor({
	name: 'AppVeyor',
	constant: 'APPVEYOR',
	env: isEnvironmentVariableDefined('APPVEYOR'),
	pr: isEnvironmentVariableDefined('APPVEYOR_PULL_REQUEST_NUMBER')
});
const AWSCodeBuild = new CIVendor({
	name: 'AWS CodeBuild',
	constant: 'AWS_CODEBUILD',
	env: isEnvironmentVariableDefined('CODEBUILD_BUILD_ARN')
});
const AzurePipelines = new CIVendor({
	name: 'Azure Pipelines',
	constant: 'AZURE_PIPELINES',
	env: isEnvironmentVariableDefined('SYSTEM_TEAMFOUNDATIONCOLLECTIONURI'),
	pr: isEnvironmentVariableDefined('SYSTEM_PULLREQUEST_PULLREQUESTID')
});
const Bamboo = new CIVendor({
	name: 'Bamboo',
	constant: 'BAMBOO',
	env: isEnvironmentVariableDefined('bamboo_planKey')
});
const BitbucketPipelines = new CIVendor({
	name: 'Bitbucket Pipelines',
	constant: 'BITBUCKET',
	env: isEnvironmentVariableDefined('BITBUCKET_COMMIT'),
	pr: isEnvironmentVariableDefined('BITBUCKET_PR_ID')
});
const Bitrise = new CIVendor({
	name: 'Bitrise',
	constant: 'BITRISE',
	env: isEnvironmentVariableDefined('BITRISE_IO'),
	pr: isEnvironmentVariableDefined('BITRISE_PULL_REQUEST')
});
const Buddy = new CIVendor({
	name: 'Buddy',
	constant: 'BUDDY',
	env: isEnvironmentVariableDefined('BUDDY_WORKSPACE_ID'),
	pr: isEnvironmentVariableDefined('BUDDY_EXECUTION_PULL_REQUEST_ID')
});
const Buildkite = new CIVendor({
	name: 'Buildkite',
	constant: 'BUILDKITE',
	env: isEnvironmentVariableDefined('BUILDKITE'),
	pr: isEnvironmentVariableNotEqualTo('BUILDKITE_PULL_REQUEST', false)
});
const CircleCI = new CIVendor({
	name: 'CircleCI',
	constant: 'CIRCLE',
	env: isEnvironmentVariableDefined('CIRCLECI'),
	pr: isEnvironmentVariableDefined('CIRCLE_PULL_REQUEST')
});
const CirrusCI = new CIVendor({
	name: 'Cirrus CI',
	constant: 'CIRRUS',
	env: isEnvironmentVariableDefined('CIRRUS_CI'),
	pr: isEnvironmentVariableDefined('CIRRUS_PR')
});
const Codeship = new CIVendor({
	name: 'Codeship',
	constant: 'CODESHIP',
	env: isEnvironmentVariableEqualTo('CI_NAME', 'codeship')
});
const Drone = new CIVendor({
	name: 'Drone',
	constant: 'DRONE',
	env: isEnvironmentVariableDefined('DRONE'),
	pr: isEnvironmentVariableEqualTo('DRONE_BUILD_EVENT', 'pull_request')
});
const dsari = new CIVendor({
	name: 'dsari',
	constant: 'DSARI',
	env: isEnvironmentVariableDefined('DSARI')
});
const GitHubActions = new CIVendor({
	name: 'Github Actions',
	constant: 'GITHUB',
	env: areAnyEnvironmentVariablesDefined('GITHUB_ACTION', 'GITHUB_WORKFLOW'),
	pr: isEnvironmentVariableEqualTo('GITHUB_EVENT_NAME', 'pull_request')
});
const GitLabCI = new CIVendor({
	name: 'GitLab CI',
	constant: 'GITLAB',
	env: isEnvironmentVariableDefined('GITLAB_CI')
});
const GoCD = new CIVendor({
	name: 'GoCD',
	constant: 'GOCD',
	env: isEnvironmentVariableDefined('GO_PIPELINE_LABEL')
});
const Hudson = new CIVendor({
	name: 'Hudson',
	constant: 'HUDSON',
	env: isEnvironmentVariableDefined('HUDSON_URL')
});
const Jenkins = new CIVendor({
	name: 'Jenkins',
	constant: 'JENKINS',
	env: areAllEnvironmentVariablesDefined('JENKINS_URL', 'BUILD_ID'),
	pr: areAnyEnvironmentVariablesDefined('ghprbPullId', 'CHANGE_ID')
});
const NetlifyCI = new CIVendor({
	name: 'Netlify Build',
	constant: 'NETLIFY',
	env: isEnvironmentVariableDefined('NETLIFY_BUILD_BASE'),
	pr: isEnvironmentVariableNotEqualTo('PULL_REQUEST', 'false')
});
const Nevercode = new CIVendor({
	name: 'Nevercode',
	constant: 'NEVERCODE',
	env: isEnvironmentVariableDefined('NEVERCODE'),
	pr: isEnvironmentVariableNotEqualTo('NEVERCODE_PULL_REQUEST', 'false')
});
const SailCI = new CIVendor({
	name: 'Sail CI',
	constant: 'SAIL',
	env: isEnvironmentVariableDefined('SAILCI'),
	pr: isEnvironmentVariableDefined('SAIL_PULL_REQUEST_NUMBER')
});
const Semaphore = new CIVendor({
	name: 'Semaphore',
	constant: 'SEMAPHORE',
	env: isEnvironmentVariableDefined('SEMAPHORE'),
	pr: isEnvironmentVariableDefined('PULL_REQUEST_NUMBER')
});
const Shippable = new CIVendor({
	name: 'Shippable',
	constant: 'SHIPPABLE',
	env: isEnvironmentVariableDefined('SHIPPABLE'),
	pr: isEnvironmentVariableEqualTo('IS_PULL_REQUEST', 'true')
});
const StriderCD = new CIVendor({
	name: 'Strider CD',
	constant: 'STRIDER',
	env: isEnvironmentVariableDefined('STRIDER')
});
const TaskCluster = new CIVendor({
	name: 'TaskCluster',
	constant: 'TASKCLUSTER',
	env: areAllEnvironmentVariablesDefined('TASK_ID', 'RUN_ID')
});
const TeamCity = new CIVendor({
	name: 'TeamCity',
	constant: 'TEAMCITY',
	env: isEnvironmentVariableDefined('TEAMCITY_VERSION')
});
const TravisCI = new CIVendor({
	name: 'Travis CI',
	constant: 'TRAVIS',
	env: isEnvironmentVariableDefined('TRAVIS'),
	pr: isEnvironmentVariableNotEqualTo('TRAVIS_PULL_REQUEST', 'false')
});

const vendors = Object.freeze([
	AppVeyor,
	AWSCodeBuild,
	AzurePipelines,
	Bamboo,
	BitbucketPipelines,
	Bitrise,
	Buddy,
	Buildkite,
	CircleCI,
	CirrusCI,
	Codeship,
	Drone,
	dsari,
	GitHubActions,
	GitLabCI,
	GoCD,
	Hudson,
	Jenkins,
	NetlifyCI,
	Nevercode,
	SailCI,
	Semaphore,
	Shippable,
	StriderCD,
	TaskCluster,
	TeamCity,
	TravisCI
]);

module.exports = {
	all: vendors
};

for (const vendor of vendors) {
	module.exports[vendor.constant] = vendor;
}
