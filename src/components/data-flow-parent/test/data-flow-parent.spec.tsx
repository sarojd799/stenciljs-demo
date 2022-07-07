import { newSpecPage } from '@stencil/core/testing';
import { DataFlowParent } from '../data-flow-parent';

describe('data-flow-parent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DataFlowParent],
      html: `<data-flow-parent></data-flow-parent>`,
    });
    expect(page.root).toEqualHtml(`
      <data-flow-parent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </data-flow-parent>
    `);
  });
});
