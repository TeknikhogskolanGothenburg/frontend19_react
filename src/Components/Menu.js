import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    menuItems: [
      { menuText: "Home", link: "#" },
      { menuText: "Projects", link: "#" },
      { menuText: "About", link: "#" },
      { menuText: "Contact", link: "#" }
    ]
  };
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {this.state.menuItems.map(menuItem => (
              <MenuItem
                key={menuItem.menuText}
                menuText={menuItem.menuText}
                link={menuItem.link}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
