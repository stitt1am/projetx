// import styled from 'styled-components';
import React, {Component} from 'react';
import './MediaCard.scss';
import petal from '../../image/petals.jpg'


class MediaCard extends Component {
    render() {
        return (
<div className="media-container">
            <div class="card">
                <div class="media-title">Artist
                    Album</div>
                <img src={petal} alt="Avatar" class="petalImg"/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>



</div>
        );
    }
}
export default MediaCard;