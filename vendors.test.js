const vendors = require('./vendors');

describe('All export tests', () => {
	it('should be an array of vendors', () => {
		expect(Array.isArray(vendors.all)).toStrictEqual(true);
	});
});

describe('AppVeyor tests', () => {
	const appVeyor = vendors.APPVEYOR;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(appVeyor.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(appVeyor.detectEnvFunction({APPVEYOR: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(appVeyor.detectPRFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(appVeyor.detectPRFunction({APPVEYOR_PULL_REQUEST_NUMBER: true})).toStrictEqual(true);
	});
});

describe('AWS CodeBuild tests', () => {
	const aws = vendors.AWS_CODEBUILD;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(aws.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(aws.detectEnvFunction({CODEBUILD_BUILD_ARN: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(aws.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('Azure Pipelines tests', () => {
	const azure = vendors.AZURE_PIPELINES;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(azure.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(azure.detectEnvFunction({SYSTEM_TEAMFOUNDATIONCOLLECTIONURI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(azure.detectPRFunction({SYSTEM_PULLREQUEST_PULLREQUESTID: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(azure.detectPRFunction({SYSTEM_PULLREQUEST_PULLREQUESTID: true})).toStrictEqual(true);
	});
});

describe('Bamboo tests', () => {
	const bamboo = vendors.BAMBOO;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(bamboo.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		// eslint-disable-next-line camelcase
		expect(bamboo.detectEnvFunction({bamboo_planKey: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(bamboo.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('BitBucket Pipelines tests', () => {
	const bb = vendors.BITBUCKET;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(bb.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(bb.detectEnvFunction({BITBUCKET_COMMIT: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(bb.detectPRFunction({BITBUCKET_PR_ID: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(bb.detectPRFunction({BITBUCKET_PR_ID: true})).toStrictEqual(true);
	});
});

describe('Bitrise tests', () => {
	const bitrise = vendors.BITRISE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(bitrise.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(bitrise.detectEnvFunction({BITRISE_IO: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(bitrise.detectPRFunction({BITRISE_PULL_REQUEST: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(bitrise.detectPRFunction({BITRISE_PULL_REQUEST: true})).toStrictEqual(true);
	});
});

describe('Buddy tests', () => {
	const buddy = vendors.BUDDY;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(buddy.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(buddy.detectEnvFunction({BUDDY_WORKSPACE_ID: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(buddy.detectPRFunction({BUDDY_EXECUTION_PULL_REQUEST_ID: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(buddy.detectPRFunction({BUDDY_EXECUTION_PULL_REQUEST_ID: true})).toStrictEqual(true);
	});
});

describe('Buildkite tests', () => {
	const buildkite = vendors.BUILDKITE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(buildkite.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(buildkite.detectEnvFunction({BUILDKITE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(buildkite.detectPRFunction({BUILDKITE_PULL_REQUEST: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(buildkite.detectPRFunction({BUILDKITE_PULL_REQUEST: 'id'})).toStrictEqual(true);
	});
});

describe('Circle CI tests', () => {
	const circleCi = vendors.CIRCLE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(circleCi.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(circleCi.detectEnvFunction({CIRCLECI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(circleCi.detectPRFunction({CIRCLE_PULL_REQUEST: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(circleCi.detectPRFunction({CIRCLE_PULL_REQUEST: true})).toStrictEqual(true);
	});
});

describe('Cirrus CI tests', () => {
	const cirrusCi = vendors.CIRRUS;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(cirrusCi.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(cirrusCi.detectEnvFunction({CIRRUS_CI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(cirrusCi.detectPRFunction({CIRRUS_PR: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(cirrusCi.detectPRFunction({CIRRUS_PR: true})).toStrictEqual(true);
	});
});

describe('Codeship CI tests', () => {
	const codeship = vendors.CODESHIP;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(codeship.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `false` if the current environment variables contain the specific environment variable with a different value than expected', () => {
		expect(codeship.detectEnvFunction({CI_NAME: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment with the correct value', () => {
		expect(codeship.detectEnvFunction({CI_NAME: 'codeship'})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null`since it\'s not currently supported', () => {
		expect(codeship.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('Drone tests', () => {
	const drone = vendors.DRONE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(drone.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(drone.detectEnvFunction({DRONE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(drone.detectPRFunction({SOME_ENV: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `false` if the current environment variables contain the specific environment with the wrong value', () => {
		expect(drone.detectPRFunction({DRONE_BUILD_EVENT: 'test'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(drone.detectPRFunction({DRONE_BUILD_EVENT: 'pull_request'})).toStrictEqual(true);
	});
});

describe('DSARI tests', () => {
	const dsari = vendors.DSARI;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(dsari.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(dsari.detectEnvFunction({DSARI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(dsari.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('GitLabCI tests', () => {
	const gitlab = vendors.GITLAB;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(gitlab.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(gitlab.detectEnvFunction({GITLAB_CI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(gitlab.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('GoCD tests', () => {
	const gocd = vendors.GOCD;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(gocd.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(gocd.detectEnvFunction({GO_PIPELINE_LABEL: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(gocd.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('Hudson tests', () => {
	const hudson = vendors.HUDSON;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(hudson.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(hudson.detectEnvFunction({HUDSON_URL: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(hudson.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('Jenkins tests', () => {
	const jenkins = vendors.JENKINS;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain all of the required environment variables', () => {
		expect(jenkins.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
		expect(jenkins.detectEnvFunction({JENKINS_URL: true})).toStrictEqual(false);
		expect(jenkins.detectEnvFunction({BUILD_ID: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain all the required environment variables', () => {
		expect(jenkins.detectEnvFunction({JENKINS_URL: true, BUILD_ID: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(jenkins.detectPRFunction({SOME_ENV: false})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain one of the required variables', () => {
		expect(jenkins.detectPRFunction({ghprbPullId: 'test'})).toStrictEqual(true);
		expect(jenkins.detectPRFunction({CHANGE_ID: 'test'})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain all the specific environment', () => {
		expect(jenkins.detectPRFunction({ghprbPullId: 'test', CHANGE_ID: 'test'})).toStrictEqual(true);
	});
});

describe('Netlify CI tests', () => {
	const netlify = vendors.NETLIFY;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(netlify.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(netlify.detectEnvFunction({NETLIFY_BUILD_BASE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(netlify.detectPRFunction({PULL_REQUEST: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(netlify.detectPRFunction({PULL_REQUEST: 'id'})).toStrictEqual(true);
	});
});

describe('Nevercode tests', () => {
	const nevercode = vendors.NEVERCODE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(nevercode.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(nevercode.detectEnvFunction({NEVERCODE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(nevercode.detectPRFunction({NEVERCODE_PULL_REQUEST: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(nevercode.detectPRFunction({NEVERCODE_PULL_REQUEST: 'id'})).toStrictEqual(true);
	});
});

describe('Sail CI tests', () => {
	const sail = vendors.SAIL;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(sail.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(sail.detectEnvFunction({SAILCI: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(sail.detectPRFunction({SOME_ENV: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(sail.detectPRFunction({SAIL_PULL_REQUEST_NUMBER: 'id'})).toStrictEqual(true);
	});
});

describe('Semaphore tests', () => {
	const semaphore = vendors.SEMAPHORE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(semaphore.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(semaphore.detectEnvFunction({SEMAPHORE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(semaphore.detectPRFunction({SOME_ENV: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(semaphore.detectPRFunction({PULL_REQUEST_NUMBER: 'id'})).toStrictEqual(true);
	});
});

describe('Shippable tests', () => {
	const shippable = vendors.SHIPPABLE;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(shippable.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(shippable.detectEnvFunction({SHIPPABLE: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(shippable.detectPRFunction({SOME_ENV: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `false` if the current environment variables contain the specific environment with an unexpected value', () => {
		expect(shippable.detectPRFunction({IS_PULL_REQUEST: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment with the expected value', () => {
		expect(shippable.detectPRFunction({IS_PULL_REQUEST: 'true'})).toStrictEqual(true);
	});
});

describe('Strider CD tests', () => {
	const strider = vendors.STRIDER;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(strider.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(strider.detectEnvFunction({STRIDER: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(strider.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('TaskCluster tests', () => {
	const taskcluster = vendors.TASKCLUSTER;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain all the specific environment', () => {
		expect(taskcluster.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
		expect(taskcluster.detectEnvFunction({TASK_ID: true})).toStrictEqual(false);
		expect(taskcluster.detectEnvFunction({RUN_ID: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(taskcluster.detectEnvFunction({RUN_ID: true, TASK_ID: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(taskcluster.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('TaskCluster tests', () => {
	const teamcity = vendors.TEAMCITY;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain all the specific environment', () => {
		expect(teamcity.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(teamcity.detectEnvFunction({TEAMCITY_VERSION: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `null` since it\'s not currently supported', () => {
		expect(teamcity.detectPRFunction({SOME_ENV: true})).toStrictEqual(null);
	});
});

describe('Travis CI tests', () => {
	const travis = vendors.TRAVIS;

	it('`detectEnvFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(travis.detectEnvFunction({SOME_ENV: true})).toStrictEqual(false);
	});

	it('`detectEnvFunction` should return `true` if the current environment variables contain the specific environment', () => {
		expect(travis.detectEnvFunction({TRAVIS: true})).toStrictEqual(true);
	});

	it('`detectPRFunction` should return `false` if the current environment variables do not contain the specific environment', () => {
		expect(travis.detectPRFunction({SOME_ENV: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `false` if the current environment variables contain the specific environment with an unexpected value', () => {
		expect(travis.detectPRFunction({TRAVIS_PULL_REQUEST: 'false'})).toStrictEqual(false);
	});

	it('`detectPRFunction` should return `true` if the current environment variables contain the specific environment with the expected value', () => {
		expect(travis.detectPRFunction({TRAVIS_PULL_REQUEST: 'true'})).toStrictEqual(true);
	});
});
