import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'data-flow-parent',
  styleUrl: 'data-flow-parent.css',
  shadow: true,
})
export class DataFlowParent {




  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
