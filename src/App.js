import React, { Component } from 'react';
import Nav from './nav.jsx';
import './nav.css';
import SideDrawer from './SideDraw/SideDraw.jsx';
import Backdrop from './BackDrop/BackDrop'

// CREDIT: https://www.youtube.com/watch?v=l6nmysZKHFU 

class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    
    // Not best practice.
    // this.setState({sideDrawerOpen: !this.state.sideDrawerOpen})
    // Use function form instead
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      // edited index.css for body and html height 100% 
      <div style={{ height: '100%'}}>
        <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
        
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
  
      <main style={{ marginTop: '10vh'}}>
        <p>This is the page content</p> 
      </main>
      </div>
    );
  }
}

export default App;
