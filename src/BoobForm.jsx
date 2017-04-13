import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

export default class BoobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoob: "left",
      nurseStartTime: null,
      nurseEndTime: null,
      nurseDate: null
    };

    this._handleBoobChange = this._handleBoobChange.bind(this);
    this._handleStartTimeChange = this._handleStartTimeChange.bind(this);
    this._handleEndTimeChange = this._handleEndTimeChange.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
    this._saveBoobClicked = this._saveBoobClicked.bind(this);
  }

  _handleBoobChange(event) {
    this.setState({
      selectedBoob: event.target.value
    });
  }

  _handleDateChange = (event, date) => {
    this.setState({
      nurseDate: date,
    });
  };

  _handleStartTimeChange = (event, time) => {
    this.setState({
      nurseStartTime: time,
    });
  };

  _handleEndTimeChange = (event, time) => {
    this.setState({
      nurseEndTime: time,
    });
  };

  _saveBoobClicked(event) {
    event.preventDefault();
    console.log('You have selected:', this.state.selectedBoob);
    console.log('You have selected:', this.state.nurseStartTime);
    console.log('You have selected:', this.state.nurseEndTime);
    console.log('You have selected:', this.state.nurseDate);
  }

  render() {
    return (
      <div>
        <form>
          <h4 className="emoji"><code>( o )( o )</code></h4>

          <div className="row">
            <p>What side did you nurse on?</p>
            <Input
              className="with-gap"
              type="radio"
              id="left"
              label="Left"
              value="left"
              checked={this.state.selectedBoob==="left"}
              onChange={this._handleBoobChange}
            />
            <Input
              className="with-gap"
              type="radio"
              id="right"
              label="Right"
              value="right"
              checked={this.state.selectedBoob==="right"}
              onChange={this._handleBoobChange}
            />
          </div>

          <div className="row">
            <p>How long did you nurse?</p>

            <MuiThemeProvider>
              <TimePicker
                id="start-time"
                hintText="Start time"
                autoOk={true}
                value={this.state.nurseStartTime}
                onChange={this._handleStartTimeChange}
              />
            </MuiThemeProvider>

            <MuiThemeProvider>
              <TimePicker
                id="end-time"
                hintText="End time"
                autoOk={true}
                value={this.state.nurseEndTime}
                onChange={this._handleEndTimeChange}
              />
            </MuiThemeProvider>
          </div>

          <div className="row">
            <p>What day is it?</p>

            <MuiThemeProvider>
              <DatePicker
                id="date"
                hintText="Date"
                autoOk={true}
                value={this.state.nurseDate}
                onChange={this._handleDateChange}
              />
            </MuiThemeProvider>
          </div>
  
        </form>

        <Button waves='light' type="submit" onClick={this._saveBoobClicked}>Save Boob</Button>
      </div>
    )
  }
}