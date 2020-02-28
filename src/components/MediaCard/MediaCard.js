// import styled from 'styled-components';
import React, {Component} from 'react';
import './MediaCard.scss';
import petal from '../../image/petals.jpg';
import PropTypes from 'prop-types';
// import MusicPlayer from '../../../node_modules/react-responsive-music-player/dist/MusicPlayer';
import MusicPlayer from 'react-responsive-music-player';


class MediaCard extends Component {


    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.img,
        title: PropTypes.string,
        album: PropTypes.string,
        playlist: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        artist: PropTypes.string,
        handleChangeValue: PropTypes.func.isRequired
    };

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

        const {id, artist, image, title, album, playlist, handleChangeValue} = this.props;
        return (


    <div>
        <MusicPlayer playlist={this.playlist} />

        </div>

        );
    }
}
export default MediaCard;