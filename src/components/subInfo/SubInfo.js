import React, {Component} from "react";
import "./SubInfo.scss";
import {subInfo} from "../../DrChuck";

export class SubInfo extends Component {
  render() {
    return (
      <div>
        {subInfo.map((item, index) => {
          return (
            <div className="subInfo" key={index}>
              <p className="sub-title">
                {item.title}
                {item.urls.map((subitem, i) => {
                  return (
                    <a
                      className="info-links"
                      href={subitem.url} 
                      // using target & rel to open in new tab
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {subitem.name}
                    </a>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SubInfo;
