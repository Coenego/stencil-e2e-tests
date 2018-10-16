/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface Test {}
  interface TestAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'Test': Components.Test;
  }

  interface StencilIntrinsicElements {
    'test': Components.TestAttributes;
  }


  interface HTMLTestElement extends Components.Test, HTMLStencilElement {}
  var HTMLTestElement: {
    prototype: HTMLTestElement;
    new (): HTMLTestElement;
  };

  interface HTMLElementTagNameMap {
    'test': HTMLTestElement
  }

  interface ElementTagNameMap {
    'test': HTMLTestElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
