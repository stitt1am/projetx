import React, {Component} from 'react';
import MediaCard from '../../components/MediaCard/MediaCard';
import './gallery.scss';
class Gallery extends Component {
    render() {
        return (
                <div id ="container">
                    <div>
                    {/*<div className="artistContent">*/}
                        {/*<MediaCard/>*/}
                    {/*</div>*/}
                        {/*<br />*/}
                    <div className="musicPlayer">
                        <MediaCard/>
                    </div></div>
                </div>

        );
    }
}

export default Gallery;