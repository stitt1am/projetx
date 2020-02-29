import styled from 'styled-components';
import React, {Component} from 'react';
import './MediaCard.scss';
import petal from '../../image/petals.jpg';
import PropTypes from 'prop-types';



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


<div className="media-container">
            {/*<div className="card">*/}
                {/*<div className="media-title">Artist Album</div>*/}
                {/*<img src={petal} alt="Avatar" className="petalImg"/>*/}
                {/*<div className="container">*/}
                    {/*<h4><b>John Doe</b></h4>*/}
                    {/*<p>Architect & Engineer</p>*/}

                {/*</div>*/}



                    {/*<MusicPlayer playlist={this.playlist} />*/}


            {/*</div>*/}





    <div className="card">
        <div className="media-title">{this.props.album}</div>
        <img src={this.props.image} alt="Avatar" className="petalImg"/>
        <div className="container">
            <h4><b>{this.props.artist}</b></h4>
            <p>{this.props.title}</p>

        </div>

    </div>



</div>
        );
    }
}
export default MediaCard;