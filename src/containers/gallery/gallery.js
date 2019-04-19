import React, {Component} from 'react';
import MediaCard from '../../components/MediaCard/MediaCard';
import './gallery.scss';
import petal from '../../image/petals.jpg';
import dots from '../../image/dots.jpg';


class Gallery extends Component {
    render() {
        return (
                <div id ="container">
                    <div>

                    <div className="musicPlayer">
                        <MediaCard
                            image={dots}
                            title="Hey Love"
                            album="Test Dummy"
                            artist="No Real Data"
                        />
                    </div   ></div>
                </div>

        );
    }
}

export default Gallery;