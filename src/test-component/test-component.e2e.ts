import {E2EPage, newE2EPage} from '@stencil/core/testing';

describe('suite', () => {
    let page: E2EPage;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<test-component></test-component>`);
    });

    it('test', async () => {
        expect(1).toBe(1);
    });
});
