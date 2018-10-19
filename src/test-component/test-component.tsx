import { Component } from '@stencil/core';

import { content } from './test-component.types';

@Component({
    tag: 'test-component',
    shadow: true
})
export class TestComponent {

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
