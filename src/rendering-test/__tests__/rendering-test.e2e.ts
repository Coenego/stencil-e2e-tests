import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

import { content } from '../rendering-test.types';

describe('the component should', () => {
    let page: E2EPage;
    let elm: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage({ html: `<rendering-test></rendering-test>` });
    });

    it('render correctly', async () => {
        elm = await page.find('rendering-test');
        expect(elm).toHaveClass('hydrated');
    });

    it('display the correct text', async () => {
        const $content = await page.find('rendering-test >>> .content');
        expect($content.innerHTML).toStrictEqual(content);
    });
});
