import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(postsResult => postsResult.json())
      .then(postsJson => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(usersResult => usersResult.json())
          .then(usersJson => {
            let posts = postsJson.map(post => {
              let img =
                "https://picsum.photos/id/" +
                Math.floor(Math.random() * 500) +
                "/200/200.jpg";

              return (
                <Post
                  key={post.id}
                  userName={usersJson.find(u => u.id === post.userId).name}
                  title={post.title}
                  body={post.body}
                  image={img}
                  likes={Math.floor(Math.random() * 100)}
                />
              );
            });
            //this.state.posts = posts;
            this.setState({ posts: posts });
          });
      });
  }
  render() {
    return <div className="post-container">{this.state.posts}</div>;
  }
}

export default Posts;
