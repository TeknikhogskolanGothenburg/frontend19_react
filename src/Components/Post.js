import React, { Component } from "react";

class Post extends Component {
  state = {
    userName: this.props.userName,
    title: this.props.title,
    image: this.props.image,
    body: this.props.body,
    likes: this.props.likes
  };
  render() {
    return (
      <div className="card post">
        <img className="card-img-top" src={this.state.image} alt="" />
        <h4>{this.state.userName}</h4>
        <span className="text-capitalize font-weight-bold">
          {this.state.title}
        </span>
        <p>{this.state.body}</p>
        <p className="likes">
          <img
            className="like"
            src="/thumb_up-24px.svg"
            alt="likes"
            onClick={this.handleLikes}
          />{" "}
          {this.state.likes}
        </p>
      </div>
    );
  }

  handleLikes = () => {
    //this.state.likes++;
    this.setState({ likes: this.state.likes + 1 });
  };
}

export default Post;
