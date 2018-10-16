import { Component } from '@stencil/core';

@Component({
    tag: 'test-component',
    shadow: true
})
export class TestComponent {

    render() {
        return (
            <div class="test">bla</div>
        );
    }
}
