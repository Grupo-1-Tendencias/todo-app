import React, { Component } from "react";
import "./App.css";

class ReadData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/todo")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          <ol className="item">
            {posts.map((post) => (
              <li key={post.id} align="start">
                <div>
                  <p className="title">{post.name}</p>
                  <p className="body">{post.description}</p>
                  <p>Date {post.dueDate}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
}

export default ReadData;
