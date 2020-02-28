import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/containers/home/home';
import ToolView from '../src/containers/toolView/toolView';

import Gallery from '../src/containers/gallery/gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Home/>*/}
        {/*<ToolView/>*/}
        <Gallery/>
      </div>
    );
  }
}

export default App;
