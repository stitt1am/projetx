import React, {Component} from 'react';
import {render} from 'react-dom';
import Navigation from '../../components/Navigation/Navigation';
import './home.scss';
import {Router, Route} from 'react-router';
import Gallery from "../gallery/gallery";
import LineChart from "../../components/LineChart/LineChart";


class Home extends Component {
    render() {
        return (

            <div>
                <div className="">
                    <Navigation/>
                </div>


                {/*<div className="galleryDiv">*/}
                {/*/!*<Gallery/>*!/*/}
                {/*1*/}
                {/*</div>*/}


                <div className="grid-container">
                    <div className="item1">
                        1234
                    </div>
                    <div className="item2">
                        <LineChart />
                    </div>
                    <div className="item3">3</div>
                    <div className="item4">4</div>
                    <div className="item5">5</div>
                    <div className="item6">6</div>
                    <div className="item7">7</div>
                    <div className="item8">8</div>
                </div>

            </div>

        );
    }
}

export default Home;

