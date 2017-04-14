import React, { Component } from 'react';
import { Row, Col, Navbar, NavItem } from 'react-materialize';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BoobForm from './BoobForm.jsx';
import PoopForm from './PoopForm.jsx';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar className="navbar" brand='// boob & poop' right>
          <NavItem href='#'>about</NavItem>
          <NavItem href='#'>contact</NavItem>
        </Navbar>

        <div className="container">
          <Row>
            <Col s={12} l={12}>
              <BoobForm />
            </Col>
          </Row>
        </div>

        <br/>

        <div className="container">
          <Row>
            <Col s={12} l={12}>
              <PoopForm />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
