import { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  id?: string;
  title: string;
  description: string;
  lecturerName?: string;
  hoursCount?: number;
  tags: string[];
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  render(): React.ReactNode {
    return (
      <div className="border border-gray-600 mt-3">
        <h3 className="text-center mt-2.5 text-xl font-semibold font-ubuntu">
          {this.props.title}
        </h3>

        <p className="text-center my-3 mx-5 font-poppins font-light">
          {this.props.description}
        </p>

        <aside className="mb-5 mx-5 flex space-x-5 pt-2">
          {this.props.tags.map((tagText, index) => (
            <Tag key={index} tag={tagText} />
          ))}
        </aside>
      </div>
    );
  }
}
