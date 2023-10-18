import { newE2EPage } from '@stencil/core/testing';

describe('stencil-wizard-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-wizard-footer></stencil-wizard-footer>');

    const element = await page.find('stencil-wizard-footer');
    expect(element).toHaveClass('hydrated');
  });
});
