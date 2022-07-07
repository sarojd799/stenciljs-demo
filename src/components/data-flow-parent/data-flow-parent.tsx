import { Component, Host, h, State } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'data-flow-parent',
  styleUrl: 'data-flow-parent.css',
  shadow: true,
})
export class DataFlowParent {

  @State() userList: any[] = []

  @State() activeUser: any;

  getUsersList() {
    axios.get('https://reqres.in/api/users?page=2').then((res: any) => {
      this.userList = (res && res.data && res.data.data) || [];
    }).catch(() => this.userList = [])
  }

  componentDidLoad() {
    console.clear();
    this.getUsersList();
  }

  private setCurrentUser(event: any) {
    this.activeUser = event.detail;
    console.log('called')
  }

  render() {

    console.log(this.activeUser)
    return (
      <Host>
        <div class="container user-list-container__parent">
          <div class="panel">
            <div class="panel-body">
              <div class="info-panel ">
                {this.activeUser ? <p>
                  <span>
                    <label>First name:</label>
                    {this.activeUser.first_name}
                  </span><br />
                  <span>
                    <label>Last name:</label>
                    {this.activeUser.last_name}
                  </span><br />
                  <span>
                    <label>Email:</label>
                    {this.activeUser.email}
                  </span>
                </p> : <p>
                  No user selected.
                </p>}
              </div>
              <div class="list-panel">
                {
                  this.userList.map((user: any, ind: number) => (
                    <data-flow-children
                      info={user}
                      indx={ind}
                      isActive={this.activeUser && (user.email === this.activeUser.email)}
                      onUserSelect={this.setCurrentUser.bind(this)} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
