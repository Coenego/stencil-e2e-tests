/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface RenderingTest {}
  interface RenderingTestAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'RenderingTest': Components.RenderingTest;
  }

  interface StencilIntrinsicElements {
    'rendering-test': Components.RenderingTestAttributes;
  }


  interface HTMLRenderingTestElement extends Components.RenderingTest, HTMLStencilElement {}
  var HTMLRenderingTestElement: {
    prototype: HTMLRenderingTestElement;
    new (): HTMLRenderingTestElement;
  };

  interface HTMLElementTagNameMap {
    'rendering-test': HTMLRenderingTestElement
  }

  interface ElementTagNameMap {
    'rendering-test': HTMLRenderingTestElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
