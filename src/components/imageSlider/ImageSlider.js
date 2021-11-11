
import React, {Component} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {imageSlider} from "../../DrChuck";
import './ImageSlider.scss';



export class ImageSlider extends Component {
  render() {
    return (
      <div className="image-slider-container">
        <Carousel autoPlay={true} infiniteLoop showThumbs={false}>
          <div>
            <img src={imageSlider.tsugi} alt="Charles Severance" />
          </div>
          <div>
            <img src={imageSlider.learner} alt="Charles Severance" />
          </div>
          <div>
            <img src={imageSlider.sakai} alt="Charles Severance" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageSlider;












// // for testing purposes


// import React from "react";
// import ImageGallery from "react-image-gallery";
// import "./ImageSlider.scss";


// // const image = [
// //   {
// //     original: 'https://picsum.photos/id/1018/1000/600/',  // original image
// //     thumbnail: 'https://picsum.photos/id/1018/250/150/',  // thumbnail image
// //   },
// //   {
// //     original: 'https://picsum.photos/id/1015/1000/600/',  // original image
// //     thumbnail: 'https://picsum.photos/id/1015/250/150/',  // thumbnail image

// //   }
// // ]

// class ImageSlider extends React.Component {
//   render() {
//     return (

      
//       // for more customization visit https://github.com/xiaolin/react-image-gallery
//       <ImageGallery
//         autoPlay
//         slideInterval={4000}
//         slideDuration={5}
//         items={imageSlider}
//       />
//     );
//   }
// }

// export default ImageSlider;


