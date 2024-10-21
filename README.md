# @peralva/prettier-config

Prettier Configuration

[![NPM Version](https://img.shields.io/npm/v/%40peralva%2Fprettier-config)](https://www.npmjs.com/package/@peralva/prettier-config?activeTab=versions)
[![GitHub Release Date](https://img.shields.io/github/release-date/peralva/prettier-config)](https://github.com/peralva/prettier-config/releases)
[![NPM License](https://img.shields.io/npm/l/%40peralva%2Fprettier-config)](https://github.com/peralva/prettier-config?tab=MIT-1-ov-file#readme)
[![NPM Downloads](https://img.shields.io/npm/dw/%40peralva%2Fprettier-config)](https://www.npmjs.com/package/@peralva/prettier-config)
[![NPM Publish](https://github.com/peralva/prettier-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/peralva/prettier-config/actions/workflows/npm-publish.yml)

## Installation

    npm i -D @peralva/prettier-config

## Usage

Add to `package.json`:

    "prettier": "@peralva/prettier-config"

If you don’t want to use package.json, you can use any of the supported extensions to export a string, e.g. `.prettierrc`:

    "@peralva/prettier-config"

### Extending the config

To extend the configuration to overwrite some properties from the configuration, import the file in a `.prettierrc.mjs` or `prettier.config.mjs` file and export the modifications, e.g:

```
import prettierConfig from '@peralva/prettier-config';

/**
 * @type {import('prettier').Config}
 */
export default {
	...prettierConfig,
	semi: false,
};
```

For more details, see https://prettier.io/docs/en/configuration
