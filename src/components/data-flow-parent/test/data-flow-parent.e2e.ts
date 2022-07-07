import { newE2EPage } from '@stencil/core/testing';

describe('data-flow-parent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<data-flow-parent></data-flow-parent>');

    const element = await page.find('data-flow-parent');
    expect(element).toHaveClass('hydrated');
  });
});
