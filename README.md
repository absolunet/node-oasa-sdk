# @absolunet/oasa-sdk

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> [Okta Advanced Server Access](https://www.okta.com/products/advanced-server-access/) (formally ScaleFT) SDK

Maps commands from the [sft](https://help.okta.com/en/prod/Content/Topics/Adv_Server_Access/docs/client.htm) client

## Install

```sh
$ npm install @absolunet/oasa-sdk
```


## Usage

```js
import oasa from '@absolunet/oasa-sdk';

const logged = oasa.isLogged();

if (logged) {

	const results = oasa.listServers();

	results.forEach(({ hostname }) => {
		console.log(hostname);
	});

}

```


## Documentation

See the [full documentation](https://documentation.absolunet.com/node-oasa-sdk) for an in-depth look.

See the [Changelog](CHANGELOG.md) to see what has changed.


## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.


## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)




[npm-badge]:          https://img.shields.io/npm/v/@absolunet/oasa-sdk?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/node-oasa-sdk?style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/absolunet/node-oasa-sdk/tests/master?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40absolunet%2Foasa-sdk.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@absolunet/oasa-sdk
[dependencies-url]: https://david-dm.org/absolunet/node-oasa-sdk
[tests-url]:        https://github.com/absolunet/node-oasa-sdk/actions?query=workflow%3Atests+branch%3Amaster
[npms-url]:         https://npms.io/search?q=%40absolunet%2Foasa-sdk
[license-url]:      https://opensource.org/licenses/MIT

