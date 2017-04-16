import React, { Component } from 'react';
import firebase from 'firebase';
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
    console.log('selectedBoob:', this.state.selectedBoob);
    console.log('nurseStartTime:', this.state.nurseStartTime);
    console.log('nurseEndTime:', this.state.nurseEndTime);
    console.log('nurseDate:', this.state.nurseDate);

    this._saveDataToFirebase(
      this.state.selectedBoob,
      this.state.nurseStartTime,
      this.state.nurseEndTime,
      this.state.nurseDate
    )

    this.setState({
      selectedBoob: this.state.selectedBoob,
      nurseStartTime: null,
      nurseEndTime: null,
      nurseDate: null
    });
  }

  _saveDataToFirebase(boob, start, end, date) {
    this.firebaseRef.push({
      selectedBoob: boob,
      nurseStartTime: start.toString(),
      nurseEndTime: end.toString(),
      nurseDate: date.toString()
    });
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref("boobs/");
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return (
      <div>
        <form>
          <div className="row emoji-header">
            <h4 className="emoji"><code>( o )( o )</code></h4>
          </div>

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
