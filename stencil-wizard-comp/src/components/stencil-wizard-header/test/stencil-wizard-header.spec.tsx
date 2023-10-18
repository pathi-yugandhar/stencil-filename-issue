import { newSpecPage } from '@stencil/core/testing';
import { StencilWizardHeader } from '../stencil-wizard-header';

describe('stencil-wizard-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilWizardHeader],
      html: `<stencil-wizard-header></stencil-wizard-header>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-wizard-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-wizard-header>
    `);
  });
});
