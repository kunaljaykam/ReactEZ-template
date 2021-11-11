import React, {Component} from "react";
import "./Info.scss";
import InfoImageCard from "../../components/infoImageCard/InfoImageCard";
import InfoTextCard from "../../components/infoTextCard/InfoTextCard";

export class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <InfoImageCard />

        <div className="info-text">
          <InfoTextCard />
        </div>
      </div>
    );
  }
}

export default Info;
