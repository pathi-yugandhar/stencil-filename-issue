import { newSpecPage } from '@stencil/core/testing';
import { StencilWizardComp } from '../stencil-wizard-comp';

describe('stencil-wizard-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilWizardComp],
      html: `<stencil-wizard-comp></stencil-wizard-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-wizard-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-wizard-comp>
    `);
  });
});
