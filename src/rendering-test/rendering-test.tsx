import { Component } from '@stencil/core';

import { content } from './rendering-test.types';

@Component({
    tag: 'rendering-test',
    shadow: true
})
export class RenderingTest {

    /**
     * Render the component
     *
     * @return {any}
     * @protected
     */
    protected render(): any {
        return (
            <div class="content">{content}</div>
        );
    }
}
