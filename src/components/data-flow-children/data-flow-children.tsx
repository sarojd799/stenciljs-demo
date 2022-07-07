import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'data-flow-children',
  styleUrl: 'data-flow-children.css',
  shadow: true,
})
export class DataFlowChildren {

  @Prop() info: any;
  @Prop() indx: number;
  @Prop() isActive: boolean;
  @Event() userSelect: EventEmitter<any>;

  handleClick(selection: any) {
    this.userSelect.emit(selection);
  }

  render() {
    return (
      <Host onClick={e => this.handleClick(this.info)}>
        <div class={`user-info__parent ${this.isActive ? 'active' : ''}`}>
          <div class="user-avatar">
            <img src={this.info.avatar} alt="user-icon" />
          </div>
          <div class="user-info">
            <p>
              {`${this.info.first_name} ${this.info.last_name}`}
            </p>
            <small>
              {this.info.email}
            </small>
          </div>
        </div>
      </Host>
    );
  }

}
