import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

export default class PoopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeChecked: false,
      pooChecked: false,
      diaperTime: null,
      diaperDate: null
    };

    this._handlePeeChange = this._handlePeeChange.bind(this);
    this._handlePooChange = this._handlePooChange.bind(this);
    this._handleTimeChange = this._handleTimeChange.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
    this._savePoopClicked = this._savePoopClicked.bind(this);
  }

  _handlePeeChange(event) {
    this.setState({
      peeChecked: event.target.checked
    });
  }

  _handlePooChange(event) {
    this.setState({
      pooChecked: event.target.checked
    });
  }

  _handleTimeChange = (event, time) => {
    this.setState({
      diaperTime: time,
    });
  };

  _handleDateChange = (event, date) => {
    this.setState({
      diaperDate: date,
    });
  };

  _savePoopClicked(event) {
    event.preventDefault();
    console.log('You have selected:', this.state.peeChecked);
    console.log('You have selected:', this.state.pooChecked);
    console.log('You have selected:', this.state.diaperTime);
    console.log('You have selected:', this.state.diaperDate);
  }

  render() {
    return (
      <div>
        <form action="#">
          <div className="row emoji-header">
            <h4 className="emoji"><code>(_*_)</code></h4>
          </div>

          <div className="row">
            <p>What was in the diaper?</p>
            <Input
              name="peeDiaper"
              type="checkbox"
              value="pee"
              label="Pee"
              id="pee"
              checked={this.state.peeChecked}
              onChange={this._handlePeeChange}
            />
            <Input
              name="pooDiaper"
              type="checkbox"
              value="poo"
              label="Poo"
              id="poo"
              checked={this.state.pooChecked}
              onChange={this._handlePooChange}
            />
          </div>

          <div className="row">
            <p>When did you change the diaper?</p>

            <MuiThemeProvider>
              <TimePicker
                id="change-time"
                name="diaperTime"
                hintText="Diaper change time"
                autoOk={true}
                value={this.state.diaperTime}
                onChange={this._handleTimeChange}
              />
            </MuiThemeProvider>
          </div>

          <div className="row">
            <p>What day is it?</p>

            <MuiThemeProvider>
              <DatePicker
                id="date-pooped"
                name="diaperDate"
                hintText="Date"
                autoOk={true}
                value={this.state.diaperDate}
                onChange={this._handleDateChange}
              />
            </MuiThemeProvider>
          </div>
        </form>

        <Button waves='light' type="submit" onClick={this._savePoopClicked}>Save Poop</Button>
      </div>
    )
  }
}