import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

describe('the component should', () => {
    let page: E2EPage;
    let elm: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage({ html: `<callback-test></callback-test>`});
        elm = await page.find('callback-test');
    });

    it('render correctly', async () => {
        expect(elm).toHaveClass('hydrated');
    });

    it('executes the callback function', async () => {
        await elm.setProperty('clickHandler', () => { console.log('CALLBACK'); });
        await page.waitForChanges();

        const HTMLButton = await page.find('callback-test >>> .button');
        await HTMLButton.click();
    });
});
