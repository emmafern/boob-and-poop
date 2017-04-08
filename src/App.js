import React, { Component } from 'react';
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Boob and Poop</h1>
          <h2><code>( o )( o ) && (_*_)</code></h2>

        </div>
        <p className="App-intro">
          <h4>Track your baby's inputs and outputs</h4>
        </p>

        <div>
          <Row>
            <Col s={12}>
              <div className="container">

                <form action="#">

                  <div className="row">
                    <div className="col s12">
                      <p>What side did you nurse on?</p>
                    </div>

                    <div className="input-field col s6">
                      <input className="with-gap" name="group1" type="radio" id="left_boob" />
                      <label for="left_boob">Left</label>
                    </div>

                    <div className="input-field col s6">
                      <input className="with-gap" name="group1" type="radio" id="right_boob" />
                      <label for="right_boob">Right</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <p>How long did you nurse?</p>
                    </div>

                    <div className="input-field col s6">
                      <label for="timepicker">Start time</label>
                      <input id="timepicker" class="timepicker" type="time" />
                    </div>

                    <div className="input-field col s6">
                      <label for="timepicker">End time</label>
                      <input id="timepicker" class="timepicker" type="time" />
                    </div>
                  </div>
                </form>

                <Button waves='light'>Save Boob</Button>
              </div>
            </Col>
          </Row>

          <br/>
          <br/>

          <Row>
            <Col s={12}>
              <div className="container">

                <form action="#">
                  <div className="row">
                    <div className="col s12">
                      <p>What was in the diaper?</p>
                    </div>

                    <div className="input-field col s6">
                      <input type="checkbox" id="pee_diaper" />
                      <label for="pee_diaper">Pee</label>
                    </div>

                    <div className="input-field col s6">
                      <input type="checkbox" id="poo_diaper" />
                      <label for="poo_diaper">Poo</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <p>When did you change the diaper?</p>
                    </div>

                    <div className="input-field col s6">
                      <label for="timepicker">Change time</label>
                      <input id="timepicker" class="timepicker" type="time" />
                    </div>
                  </div>
                </form>

                <Button waves='light'>Save Poop</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
