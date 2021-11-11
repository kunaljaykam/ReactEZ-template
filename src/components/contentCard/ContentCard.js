import React from 'react'
import './ContentCard.scss';





export default function ContentCard({content}) {

    return (
      <div className="content-card">
      <a           href={content.videoLink}
          // using target & rel to open in new tab
          target="_blank"
          rel="noreferrer noopener">
        <img
          className="thumbnail"
          src={content.thumbnail}
          alt={content.title}
        />
      </a>
        <div className="content-info">
          <h3 className="content-title">{content.title}</h3>
          <a
            className="content-links"
            href={content.videoLink}
            // using target & rel to open in new tab
            target="_blank"
            rel="noreferrer noopener"
          >
            Watch Video
          </a>
          <a
            className="content-links"
            href={content.websiteLink}
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