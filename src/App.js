import React, { Component } from 'react';
import { Button, Row, Col, Input, Navbar, NavItem } from 'react-materialize';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class BoobForm extends Component {
  render() {
    return (
      <div>
        <form action="#">
          <h4 className="emoji"><code>( o )( o )</code></h4>

          <div className="row">
            <p>Choose a date</p>

            <MuiThemeProvider>
              <DatePicker
                id="date-nursed"
                hintText="Date"
                autoOk={true}
              />
            </MuiThemeProvider>
          </div>

          <div className="row">
            <p>What side did you nurse on?</p>
            <Input className="with-gap" name="nurse-side" type="radio" id="left-boob" value="left" label="Left" />
            <Input className="with-gap" name="nurse-side" type="radio" id="right-boob" value="right" label="Right" />
          </div>

          <div className="row">
            <p>How long did you nurse?</p>

            <MuiThemeProvider>
              <TimePicker
                id="start-time"
                hintText="Start time"
                autoOk={true}
              />
            </MuiThemeProvider>

            <MuiThemeProvider>
              <TimePicker
                id="end-time"
                hintText="End time"
                autoOk={true}
              />
            </MuiThemeProvider>
          </div>
        </form>

        <Button waves='light'>Save Boob</Button>
      </div>
    )
  }
}

class PoopForm extends Component {
  render() {
    return (
      <div>
        <form action="#">
          <h4 className="emoji"><code>(_*_)</code></h4>

          <div className="row">
            <p>Choose a date</p>

            <MuiThemeProvider>
              <DatePicker
                id="date-pooped"
                hintText="Date"
                autoOk={true}
              />
            </MuiThemeProvider>
          </div>

          <div className="row">
            <p>What was in the diaper?</p>
            <Input type="checkbox" id="pee_diaper" label="Pee" />
            <Input type="checkbox" id="poo_diaper" label="Poo" />
          </div>

          <div className="row">
            <p>When did you change the diaper?</p>

            <MuiThemeProvider>
              <TimePicker
                id="change-time"
                hintText="Change time"
                autoOk={true}
              />
            </MuiThemeProvider>
          </div>
        </form>

        <Button waves='light'>Save Poop</Button>
      </div>
    )
  }
}

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
