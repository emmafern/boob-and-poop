import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'react-materialize';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Boob and Poop</h1>
          <h2><code>( o )( o ) && (_*_)</code></h2>

        </div>

        <div className="container">
          <Row>
            <Col s={4}></Col>
            <Col s={4}>
              <form action="#">

                <div className="row">
                  <p>What side did you nurse on?</p>
                  <Input className="with-gap" name="nurse-side" type="radio" id="left-boob" value="left" label="Left" />
                  <Input className="with-gap" name="nurse-side" type="radio" id="right_boob" value="right" label="Right" />
                </div>

                <div className="row">
                  <p>How long did you nurse?</p>

                  <MuiThemeProvider>
                    <TimePicker
                      hintText="Start time"
                      autoOk={true}
                    />
                  </MuiThemeProvider>

                  <MuiThemeProvider>
                    <TimePicker
                      hintText="End time"
                      autoOk={true}
                    />
                  </MuiThemeProvider>
                </div>

              </form>

              <Button waves='light'>Save Boob</Button>
            </Col>
            <Col s={4}></Col>
          </Row>
        </div>

          <br/>
          <br/>

        <div className="container">
          <Row>
            <Col s={4}></Col>
            <Col s={4}>
              <form action="#">
                <div className="row">
                  <p>What was in the diaper?</p>
                  <Input type="checkbox" id="pee_diaper" label="Pee" />
                  <Input type="checkbox" id="poo_diaper" label="Poo" />
                </div>

                <div className="row">
                  <p>When did you change the diaper?</p>

                  <MuiThemeProvider>
                    <TimePicker
                      hintText="Change time"
                      autoOk={true}
                    />
                  </MuiThemeProvider>
                </div>
              </form>

              <Button waves='light'>Save Poop</Button>
            </Col>
            <Col s={4}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
