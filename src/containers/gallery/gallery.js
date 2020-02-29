import React, {Component} from 'react';
import MusicPlayer from 'react-responsive-music-player';
import MediaCard from '../../components/MediaCard/MediaCard';
import './gallery.scss';
import petal from '../../image/petals.jpg';
import dots from '../../image/dots.jpg';
import Fugees from '../../image/fugees.mp3';
import JukeJam from '../../image/JukeJam.mp3';


class Gallery extends Component {
    render() {
        const playlist = [
            {
                url: Fugees,
                cover: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/1AD2/production/_98866860_gettyimages-486020904.jpg',
                title: 'Fugees',
                artist: [
                    'The Fugees',
                    'Wyclef'
                ]
            },
            {
                url: JukeJam,
                cover: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/1AD2/production/_98866860_gettyimages-486020904.jpg',
                title: 'Juke Jam',
                artist: [
                    'Chance The Rapper',
                    'Justin Bieber'
                ]
            }
        ];

        return (
            <div id="container">
                <div>
                    <MusicPlayer playlist={playlist}
                                 progressColor="black"
                                 btnColor="hotpink"
                                 mode="vertical"
                    />
                </div>

                <div className="musicPlayer">
                    <MediaCard
                        image={petal}
                        title="Hey Love"
                        album="Test Dummy"
                        artist="No Real Data"/>
                </div>


                <div className="musicPlayer2">
                <MediaCard
                image={dots}
                title="Hey Love"
                album="Test Dummy"
                artist="No Real Data"/>
                </div>
            </div>

        );
    }
}

export default Gallery;