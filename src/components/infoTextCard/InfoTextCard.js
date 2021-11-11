import React, {Component} from "react";
import "./InfoTextCard.scss";
import {info} from "../../DrChuck";
import SubInfo from "../subInfo/SubInfo";

export class InfoTextCard extends Component {
  render() {
    return (
      <div className="info-text-container">
        <p className="title">
          {info.name}
          <span className="title2">{info.nickname}</span>
        </p>
        <p className="bio">{info.bio}</p>
        <SubInfo />
      </div>
    );
  }
}

export default InfoTextCard;
