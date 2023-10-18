import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-wizard-container',
  styleUrl: 'stencil-wizard-container.css',
  shadow: true,
})
export class StencilWizardContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
