import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-wizard-header',
  styleUrl: 'stencil-wizard-header.css',
  shadow: true,
})
export class StencilWizardHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
