import { loadFixture } from './test-utils.js';
import { expect } from 'chai';

describe('Serverless prerender', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/middleware/',
		});
	});

	it('build successful', async () => {
		await fixture.build();
		expect(await fixture.readFile('../.vercel/output/static/index.html')).to.be.ok;
	});
});
