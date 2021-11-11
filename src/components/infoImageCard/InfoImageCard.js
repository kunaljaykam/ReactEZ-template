import React, {Component} from "react";
import "./InfoImageCard.scss";
import {info} from "../../DrChuck";
export class InfoImageCard extends Component {
  render() {
    return (
      <div className="info-image-container">
        <img className="info-image" src={info.image} alt="Charles Severance" />
      </div>
    );
  }
}

export default InfoImageCard;
