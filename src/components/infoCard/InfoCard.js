import React, { Component } from 'react'
import './InfoCard.scss';
import InfoImageCard from '../infoImageCard/InfoImageCard';

export class InfoCard extends Component {
    render() {
        return (
            <div className="info-card-container">

            <InfoImageCard />
                
            </div>
        )
    }
}

export default InfoCard
