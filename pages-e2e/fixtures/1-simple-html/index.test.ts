import { describe, it } from 'vitest';

describe('my test', () => {
	it('works', async ({ expect }) => {
		const response = await fetch(`${DEPLOYMENT_URL}/`);
		expect(response.status).toBe(200);
	});
});
