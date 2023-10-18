import { newSpecPage } from '@stencil/core/testing';
import { StencilWizardContainer } from '../stencil-wizard-container';

describe('stencil-wizard-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilWizardContainer],
      html: `<stencil-wizard-container></stencil-wizard-container>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-wizard-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-wizard-container>
    `);
  });
});
