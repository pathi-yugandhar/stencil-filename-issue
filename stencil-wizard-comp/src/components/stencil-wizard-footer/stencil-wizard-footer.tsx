import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-wizard-footer',
  styleUrl: 'stencil-wizard-footer.css',
  shadow: true,
})
export class StencilWizardFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
