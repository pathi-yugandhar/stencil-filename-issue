import { newE2EPage } from '@stencil/core/testing';

describe('stencil-wizard-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-wizard-header></stencil-wizard-header>');

    const element = await page.find('stencil-wizard-header');
    expect(element).toHaveClass('hydrated');
  });
});
