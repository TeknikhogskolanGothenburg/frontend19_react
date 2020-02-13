import React, { Component } from "react";

class MenuItem extends Component {
  state = {
    menuText: this.props.menuText,
    link: this.props.link
  };
  render() {
    return (
      <li className="nav-item">
        <a href={this.state.link} className="nav-link">
          {this.state.menuText}
        </a>
      </li>
    );
  }
}

export default MenuItem;
