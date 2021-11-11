import React, { Component } from 'react';
import './Thumbnail.scss';
import { contents } from '../../DrChuck';
export class Thumbnail extends Component {
    render() {
      
        return (
            <div>
            {contents.content.map((content, index) => {
                return (
                    <div className="thumbnail-container" key={index}>
                        <div className="thumbnail-image">
                            <img  className="thumbnail" src={content.thumbnail} alt={content.title} />
                        </div>
                    
                    </div>
                )
            }
            )}
            </div>
        )
    }
              
        
        
  
  
}



export default Thumbnail;
