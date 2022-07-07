import { newSpecPage } from '@stencil/core/testing';
import { DataFlowChildren } from '../data-flow-children';

describe('data-flow-children', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DataFlowChildren],
      html: `<data-flow-children></data-flow-children>`,
    });
    expect(page.root).toEqualHtml(`
      <data-flow-children>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </data-flow-children>
    `);
  });
});
