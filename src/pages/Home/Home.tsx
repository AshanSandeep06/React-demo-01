import React, { Component } from "react";
import Post from "../../components/Post";

class Home extends Component {
  render() {
    return (
      <section className="px-12 pt-[18px] pb-10 flex flex-col gap-y-4">
        <Post />
        <Post />
        <Post />
      </section>
    );
  }
}

export default Home;
