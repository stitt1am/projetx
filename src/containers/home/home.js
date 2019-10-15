import React, {Component} from 'react';
import {render} from 'react-dom';
import Navigation from '../../components/Navigation/Navigation';
import './home.scss';
import {Router, Route} from 'react-router';
import Gallery from "../gallery/gallery";
import Button from "../../../src/components/Button/button";
import LineChart from "../../components/LineChart/LineChart";


class Home extends Component {

    filesUpload(){
        window.alert("whatupdoe");
    }
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
                    <div className="item3">
                        <div className="divTitle">
                            <span className="titleName"><i className="fas fa-heart "></i>Project Likes</span>
                            <span className="fiscalPeriod">january 2019</span>
                        </div>
                        <span className="ticker"><i className="fas fa-caret-up "></i>+119</span>
                        <span className="numbers">3 015</span>
                        <Button  className="primary" handleAction={this.filesUpload}
                                 label="OPEN STATISTIC">
                        </Button>
                    </div>
                    <div className="item4">4</div>
                    <div className="item5">5</div>
                    <div className="item6"><div className="divTitle">
                        <span className="titleName"><i className="fas fa-project-diagram"></i>Project Views</span>
                        <span className="fiscalPeriod">january 2019</span>
                    </div></div>
                    <div className="item7">7</div>
                    <div className="item8">8</div>
                </div>

            </div>

        );
    }
}

export default Home;

