import React from 'react'
import './ContentCard.scss';





export default function ContentCard({content}) {

    return (
      <div className="content-card">
        <img
          className="thumbnail"
          src={content.thumbnail}
          alt={content.title}
        />
        <div className="content-info">
          <h3 className="content-title">{content.title}</h3>
          <a
            className="content-links"
            href={content.videolink}
            // using target & rel to open in new tab
            target="_blank"
            rel="noreferrer noopener"
          >
            Watch Video
          </a>
          <a
            className="content-links"
            href={content.websitelink}
            // using target & rel to open in new tab
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit Website
          </a>
          <div className="content-description">
            <p>{content.description}</p>
          </div>
        </div>
      </div>
    );
}