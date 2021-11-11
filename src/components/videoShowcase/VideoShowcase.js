
import React, {Component} from "react";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {videos} from "../../DrChuck";
import ReactPlayer from "react-player";
import './VideoShowcase.scss'



export class VideoShowcase extends Component {
  render() {
    return (
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop
          centerMode={true}
          showThumbs={true}
        >
          <div>
            <ReactPlayer
              url={videos.urlOne}
              width="100%"
              height="13em"
              controls={false}
            />
          </div>
          <div>
            <ReactPlayer
              url={videos.urlTwo}
              width="100%"
              height="13em"
              controls={false}
            />
          </div>
          <div>
            <ReactPlayer
              url={videos.urlThree}
              width="100%"
              height="13em"
              controls={false}
            />
          </div>
        </Carousel>
      </div>
    );
  }
}




export default VideoShowcase;
