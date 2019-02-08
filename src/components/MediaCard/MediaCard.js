// import styled from 'styled-components';
import React, {Component} from 'react';
import './MediaCard.scss';
import MusicPlayer from 'react-responsive-music-player';
import petal from '../../image/petals.jpg'


class MediaCard extends Component {

     playlist = [
        {
            url: 'path/to/mp3',
            cover: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/1AD2/production/_98866860_gettyimages-486020904.jpg',
            title: 'Despacito',
            artist: [
                'Luis Fonsi',
                'Daddy Yankee'
            ]
        },
        {
            url: 'path/to/mp3',
            cover: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/1AD2/production/_98866860_gettyimages-486020904.jpg',
            title: 'Bedtime Stories',
            artist: [
                'Jay Chou'
            ]
        }
    ]
    render() {
        return (
<div className="media-container">
            <div className="card">
                <div className="media-title">Artist
                    Album</div>
                <img src={petal} alt="Avatar" className="petalImg"/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>

                </div>


                <div>
                    ...
                    <MusicPlayer playlist={this.playlist} />
                    ...
                </div>
            </div>



</div>
        );
    }
}
export default MediaCard;