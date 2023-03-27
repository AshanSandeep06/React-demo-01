import React, { Component } from "react";

type TagProps = {
  tag: string;
};

type TagState = {};

export default class Tag extends Component<TagProps, TagState> {
  render() {
    return (
      <span className="font-poppins text-sm font-light text-center border border-slate-400 rounded px-6 py-2">
        {this.props.tag}
      </span>
    );
  }
}
