import { newE2EPage } from '@stencil/core/testing';

describe('stencil-wizard-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-wizard-comp></stencil-wizard-comp>');

    const element = await page.find('stencil-wizard-comp');
    expect(element).toHaveClass('hydrated');
  });
});
