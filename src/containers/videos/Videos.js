import React, { Component } from 'react'
import ReactPlayer from "react-player";
import './VideoShowcase.scss';

export class VideoShowcase extends Component {
  render() {
    return (
      <div className="video-showcase">
        <ReactPlayer url="https://vimeo.com/17207620" />
      </div>
    );
  }

  
  }


export default VideoShowcase
