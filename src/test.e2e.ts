import {E2EPage, newE2EPage} from '@stencil/core/testing';

describe('suite', () => {
    let page: E2EPage;
    // let element: E2EElement;

    beforeEach(async () => {
       page = await newE2EPage({ html: `<div>bla</div>`});
    });

    it('test', async () => {
        expect(1).toBe(1);
    });
});
