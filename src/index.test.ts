import assert from 'node:assert';
import { describe, it } from 'node:test';
import url from 'node:url';
import prettierConfig from './index.js';

const __filename = url.fileURLToPath(import.meta.url);

describe(__filename, () => {
	it(() => {
		assert(typeof prettierConfig === 'object');
	});
});
