import React, {Component} from "react";
import "./Contents.scss";
import ContentCard from "../../components/contentCard/ContentCard";
import {contents} from "../../DrChuck";

export class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <div className="content-header">
          <p>{contents.title}</p>
        </div>

        <div className="content-container">
          <div className="info-text">
            {contents.content.map((content, index) => {
              return (
                <ContentCard
                  key={index}
                  content={{
                    
                    thumbnail: content.thumbnail,
                    title: content.title,
                    description: content.description,
                    videoLink: content.videoLink,
                    websiteLink: content.websiteLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Contents;
