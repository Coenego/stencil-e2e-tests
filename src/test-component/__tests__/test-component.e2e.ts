import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

describe('suite', () => {
    let page: E2EPage;
    let elm: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<test-component></test-component>`);
    });

    it('test', async () => {
        elm = await page.find('test-component');
        expect(elm).toHaveClass('hydrated');
    });
});
