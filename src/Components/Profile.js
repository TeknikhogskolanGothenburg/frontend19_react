import React, { Component } from "react";

class Profile extends Component {
  state = {
    heading: this.props.heading,
    image: this.props.image,
    body: this.props.body
  };
  render() {
    return (
      <div className="border border-secondary profile-container">
        <img
          src={this.state.image}
          alt="Profile"
          className="rounded-circle profile-img"
        />
        <h3>{this.state.heading}</h3>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Profile;
