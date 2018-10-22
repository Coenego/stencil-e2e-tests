import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'callback-test',
    shadow: true
})
export class CallbackTest {

    @Prop() clickHandler: Function = undefined;

    private _clickHandler(): void {
        console.log('do something interesting before invoking the callback');

        // Invoke the callback function
        if (this.clickHandler !== undefined) {
            this.clickHandler();
        }
    }

    render() {
        return (
            <button class="button" onClick={this._clickHandler}>Button</button>
        );
    }
}
