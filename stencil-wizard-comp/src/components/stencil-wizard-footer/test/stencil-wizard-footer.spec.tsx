import { newSpecPage } from '@stencil/core/testing';
import { StencilWizardFooter } from '../stencil-wizard-footer';

describe('stencil-wizard-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilWizardFooter],
      html: `<stencil-wizard-footer></stencil-wizard-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-wizard-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-wizard-footer>
    `);
  });
});
