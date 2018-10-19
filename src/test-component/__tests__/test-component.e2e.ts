import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

import { content } from '../test-component.types';

describe('the component should', () => {
    let page: E2EPage;
    let elm: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<test-component></test-component>`);
    });

    it('render correctly', async () => {
        elm = await page.find('test-component');
        expect(elm).toHaveClass('hydrated');
    });

    it('display the correct text', async () => {
        const $content = await page.find('test-component >>> .content');
        expect($content.innerHTML).toStrictEqual(content);
    });
});
