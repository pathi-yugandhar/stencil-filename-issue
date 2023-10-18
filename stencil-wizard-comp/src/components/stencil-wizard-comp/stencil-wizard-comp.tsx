import { Component, h } from '@stencil/core';
import { defineCustomElements as stencilButtonComp } from "stencil-button/loader"

/* 
  I have to do this to avoid collisions when my wizard is used in 
  an application along with other components consuming button.
  https://stackoverflow.com/questions/59712809/stencil-namespacing-custom-elements-names-to-avoid-collisions
*/
stencilButtonComp(window, {
  transformTagName: (tagName: string) => `wizard-${tagName}`,
} as any);

@Component({
  tag: 'stencil-wizard-comp',
  styleUrl: 'stencil-wizard-comp.css',
  shadow: true,
})
export class StencilWizardComp {

  render() {
    return (
      <stencil-wizard-container>
        <stencil-wizard-header>Header</stencil-wizard-header>
        <p>Wizard content</p>
        <stencil-wizard-footer>
          <wizard-stencil-button>Ok</wizard-stencil-button>
        </stencil-wizard-footer>
      </stencil-wizard-container>
    );
  }

}
