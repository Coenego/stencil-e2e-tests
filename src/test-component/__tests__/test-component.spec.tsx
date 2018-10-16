import { TestComponent } from '../test-component';

describe('test-component', () => {

    it('should build', () => {
        expect(new TestComponent()).toBeTruthy();
    });
});
