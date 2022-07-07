import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'data-flow-children',
  styleUrl: 'data-flow-children.css',
  shadow: true,
})
export class DataFlowChildren {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
