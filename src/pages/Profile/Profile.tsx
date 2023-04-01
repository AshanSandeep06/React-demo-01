import React, { Component } from "react";
import { PostDetails } from "../../types/PostDetails";
import Post from "../../components/Post";

type HomeProps = {};

type HomeState = {
  postList: PostDetails[];
};

export default class Profile extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day 01",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.",
          lecturerName: "Sanu",
          hoursCount: 6,
          tags: ["Day-01", "Sanu", "Spring", "Spring-Boot"],
        },

        {
          id: "2",
          title: "Lecture Day 02",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.",
          lecturerName: "Chanu",
          hoursCount: 5,
          tags: ["Day-02", "Chanu", "Intro", "Type-Script"],
        },

        {
          id: "3",
          title: "Lecture Day 03",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet voluptatum alias explicabo esse, sequi eius labore accusamus ipsam nobis quo reiciendis fugit deleniti omnis nemo, exercitationem magnam inventore pariatur.",
          lecturerName: "Yasindu",
          hoursCount: 6,
          tags: ["Day-03", "Yasindu", "OOP", "Threads"],
        },
      ],
    };
  }

  render() {
    return (
      <section className="px-12 pt-[18px] pb-10 flex flex-col gap-y-4">
        {/* <Post id="1" title="sds" description="sdsds" tags={["Intro", "Type-Script"]}/> */}

        {this.state.postList.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            description={post.description}
            lecturerName={post.lecturerName}
            hoursCount={post.hoursCount}
            tags={post.tags}
          />
        ))}
      </section>
    );
  }
}
