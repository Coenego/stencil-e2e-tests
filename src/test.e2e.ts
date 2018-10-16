import {E2EPage, newE2EPage} from '@stencil/core/testing';

describe('suite', () => {
    let page: E2EPage;

    beforeEach(async () => {
        page = await newE2EPage({ html: `<test></test>`});
        await page.waitForChanges();
    });

    it('test', async () => {
        expect(1).toBe(1);
    });
});
