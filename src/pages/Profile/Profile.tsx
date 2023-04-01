import React, { Component } from 'react'
import { PostDetails } from '../../types/PostDetails';
  
  type HomeProps = {};
  
  type HomeState = {
    postList: PostDetails[];
  };

export default class Profile extends Component {
  render() {
    return (
      <div>Profile</div>
    )
  }
}