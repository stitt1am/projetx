import React, {Component} from 'react';
import { render } from 'react-dom';
import Navigation from '../../components/Navigation/Navigation';

import {Router, Route} from 'react-router';

class Home extends Component {
    render(){
        return (<Navigation/>);
    }
}

export default Home;

