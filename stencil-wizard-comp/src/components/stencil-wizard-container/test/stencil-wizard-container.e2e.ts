import { newE2EPage } from '@stencil/core/testing';

describe('stencil-wizard-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-wizard-container></stencil-wizard-container>');

    const element = await page.find('stencil-wizard-container');
    expect(element).toHaveClass('hydrated');
  });
});
