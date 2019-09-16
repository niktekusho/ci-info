# ci-info-next

<!-- ![](https://img.shields.io/github/license/niktekusho/ci-info-next.svg) [![](https://img.shields.io/npm/v/ci-info-next.svg)](https://www.npmjs.com/package/ci-info-next) [![Build Status](https://travis-ci.org/niktekusho/ci-info-next.svg?branch=master)](https://travis-ci.org/niktekusho/ci-info-next) [![](https://img.shields.io/node/v/ci-info-next.svg)](https://www.npmjs.com/package/ci-info-next) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Maintainability](https://api.codeclimate.com/v1/badges/744538fb7227c1a86bea/maintainability)](https://codeclimate.com/github/niktekusho/ci-info-next/maintainability) [![](https://img.shields.io/bundlephobia/minzip/ci-info-next.svg)](https://bundlephobia.com/result?p=ci-info-next) -->

> Get details of the current CI environment. This library is heavily inspired by https://github.com/watson/ci-info.

## Installation

**Note:** this library needs [Node.js](https://nodejs.org/) and a console you can type in commands (PowerShell on Windows, Terminal on macOS and your favorite terminal emulator on every other OS). The **minimum required version** of Node.js is: [8 - codename "Carbon"](https://github.com/nodejs/Release#release-schedule).

In your console, run the following command:

```sh
$ npm install ci-info-next
```

You can also use `yarn` (like we do in this project):

```sh
$ yarn add ci-info-next
```

## Usage

The library exports the following API:

-   function `detectVendor`: get an array of possible CI vendors based on the defined environment variables;

    ```js
    // process.env: TRAVIS='',TRAVIS_PULL_REQUEST=''
    const {detectVendor} = require('@niktekusho/ci-info');

    console.log(detectVendor()); // Logs: ['TRAVIS']
    ```

-   function `isCI`: detect if the current environment is running on a Continuous Integration service;

    ```js
    // On your PC
    const {isCI} = require('@niktekusho/ci-info');

    console.log(isCI()); // Logs: false

    // On a CI service...
    console.log(isCI()); // Logs: true
    ```

-   function `isPR`: detect if the current environment is running on Pull Request build within a Continuous Integration service;

    ```js
    // process.env: TRAVIS='',TRAVIS_PULL_REQUEST=''
    const {isPR} = require('@niktekusho/ci-info');

    console.log(isPR()); // Logs: true
    ```

- object `vendors`: containing the supported CI services.

## Supported CI vendors

| Name                                                                            | Constant          | Supports PR detection |
| ------------------------------------------------------------------------------- | ----------------- | --------------------- |
| [AppVeyor](http://www.appveyor.com)                                             | `APPVEYOR`        | **Yes**               |
| [AWS CodeBuild](https://aws.amazon.com/codebuild/)                              | `AWS_CODEBUILD`   | **No**                |
| [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) | `AZURE_PIPELINES` | **Yes**               |
| [Bamboo](https://www.atlassian.com/software/bamboo)                             | `BAMBOO`          | **No**                |
| [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines)         | `BITBUCKET`       | **Yes**               |
| [Bitrise](https://www.bitrise.io/)                                              | `BITRISE`         | **Yes**               |
| [Buddy](https://buddy.works/)                                                   | `BUDDY`           | **Yes**               |
| [Buildkite](https://buildkite.com/)                                             | `BUILDKITE`       | **Yes**               |
| [CircleCI](http://circleci.com)                                                 | `CIRCLE`          | **Yes**               |
| [Cirrus CI](https://cirrus-ci.org)                                              | `CIRRUS`          | **Yes**               |
| [Codeship](https://codeship.com)                                                | `CODESHIP`        | **No**                |
| [Drone](https://drone.io)                                                       | `DRONE`           | **Yes**               |
| [dsari](https://github.com/rfinnie/dsari)                                       | `DSARI`           | **No**                |
| [GitHub Actions](https://github.com/features/actions)                           | `GITHUB`          | **Yes**               |
| [GitLab CI](https://about.gitlab.com/product/continuous-integration/)           | `GITLAB`          | **No**                |
| [GoCD](https://www.gocd.org/)                                                   | `GOCD`            | **No**                |
| [Hudson](http://hudson-ci.org)                                                  | `HUDSON`          | **No**                |
| [Jenkins](https://jenkins.io/)                                                  | `JENKINS`         | **Yes**               |
| [Netlify Build](https://www.netlify.com/products/build/)                        | `NETLIFY`         | **Yes**               |
| [Nevercode](https://nevercode.io/)                                              | `NEVERCODE`       | **Yes**               |
| [Sail CI](https://sail.ci/)                                                     | `SAIL`            | **Yes**               |
| [Semaphore](https://semaphoreci.com)                                            | `SEMAPHORE`       | **Yes**               |
| [Shippable](https://www.shippable.com/)                                         | `SHIPPABLE`       | **Yes**               |
| [Strider CD](https://strider-cd.github.io/)                                     | `STRIDER`         | **No**                |
| [TaskCluster](https://docs.taskcluster.net/docs)                                | `TASKCLUSTER`     | **No**                |
| [TeamCity](https://www.jetbrains.com/teamcity/)                                 | `TEAMCITY`        | **No**                |
| [Travis CI](https://travis-ci.com/)                                             | `TRAVIS`          | **Yes**               |

## API

### CIVendor

#### name

Pretty-printable name of the CI Vendor, for example `'Travis CI'`.

#### constant

This property is an internal "id" of the CI Vendor. This library enforces an uppercased format, for example `'TRAVIS'`.

#### detectEnvFunction(envs)

This function checks if the specified environment variables match this vendor's required environment variables.
Returns `true` if the current environment variables suggest that this vendor **could** be the one in use.
Throws a `TypeError` if the specified `envs` argument is not of type `'object'`.

##### envs

Type: `object`

Environment variables object that allows you to override the default process environment.

#### detectPRFunction(envs)

This function checks if the specified environment variables match this vendor's required environment variables for Pull Requests.
Returns `true` if the current environment variables suggest that this vendor **could** be the one in use.
**This function returns `null` if the vendor does not provide a reliable way to check for a PR environment.**

Throws a `TypeError` if the specified envs argument is not of type `'object'`.

##### envs

Type: `object`

Environment variables object that allows you to override the default process environment.

### detectVendor(envs?)

Returns: `CIVendor[]`

Tries to detect which vendors match the specified environment and returns an array of the vendors matching the specified environment.

#### envs

Type: `object`<br>
Default: `process.env`

Environment variables object that allows you to override the default process environment.

### isCI(envs?)

This function returns whether the specified environment variables suggest a CI environment.

#### envs

Type: `object`<br>
Default: `process.env`

Environment variables object that allows you to override the default process environment.

### isPR(envs?)

Returns whether the specified environment variables suggest a PR build in the CI system.

#### envs

Type: `object`<br>
Default: `process.env`

Environment variables object that allows you to override the default process environment.

### vendors

This object contains all the supported CI vendors, both individually (using the CIVendor.CONSTANT property) and collectively (`all` property).

## Related

-   [Original library](https://github.com/watson/ci-info)
