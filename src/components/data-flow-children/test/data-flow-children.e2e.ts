import { newE2EPage } from '@stencil/core/testing';

describe('data-flow-children', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<data-flow-children></data-flow-children>');

    const element = await page.find('data-flow-children');
    expect(element).toHaveClass('hydrated');
  });
});
