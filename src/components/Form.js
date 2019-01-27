import React, { Component } from "react";
import ReactSVG from "react-svg";
import { Router, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

import travel from "../images/travel.jpg";

import transportation from "../images/plane.svg";
import hotel from "../images/hotel.svg";
import sight from "../images/torii-gate.svg";
import arrowRight from "../images/arrow-right.svg";

class App extends Component {
  state = {
    locationCountry: "",
    locationAddress:"",
    locationCity: "",
    locationState:"",
    destinationCountry: "",
    destinationAddress:"",
    destinationCity:"",
    destinationState:"",
    redirect: false
  };
  locationOnChangeCountry = event => {
    this.setState({ locationCountry: event.target.value });
  };
  locationOnChangeAddress = event => {
    this.setState({ locationAddress: event.target.value });
  };
  locationOnChangeCity = event => {
    this.setState({ locationCity: event.target.value });
  };
  locationOnChangeState = event => {
    this.setState({ locationState: event.target.value });
  };
  destinationOnChangeCountry = event => {
    this.setState({ destinationCountry: event.target.value });
  };
  destinationOnChangeAddress = event => {
    this.setState({ destinationAddress: event.target.value });
  };
  destinationOnChangeCity = event => {
    this.setState({ destinationCity: event.target.value });
  };
  destinationOnChangeState = event => {
    this.setState({ destinationState: event.target.value });
  };

  handleSubmit = event => {
    console.log(event.target);
     this.setState({redirect: true
     })
  }
  renderForm = () => {
    return !!this.state.redirect ? <Redirect to='/depart' />:<div className={"formPage"}>
        <div className={"formCard"}>
        <ReactSVG src={transportation} className={"formIcon"}/>
          <form onSubmit={this.handleSubmit} className={"formWrap"}>
          <div className={"formTitle"}>Step One: Flight</div>
            <div className={"formInput"}>
              <div>
                <div>Location: </div>
                <input
                  type="text"
                  name="locationCountry"
                  value={this.state.locationCountry}
                  placeholder="Country"
                  onChange={event => this.locationOnChangeCountry(event)}
                />
                <input
                  type="text"
                  name="locationAddress"
                  value={this.state.locationAddress}
                  placeholder="Address"
                  onChange={event => this.locationOnChangeAddress(event)}
                />
                <input
                  type="text"
                  name="locationCity"
                  value={this.state.locationCity}
                  placeholder="City"
                  onChange={event => this.locationOnChangeCity(event)}
                />
                <input
                  type="text"
                  name="locationState"
                  value={this.state.locationState}
                  placeholder="State"
                  onChange={event => this.locationOnChangeState(event)}
                />
              </div>
              <ReactSVG src={arrowRight} className={"formSVG"}/>
              <div>
                <div >Destination: </div>
                <input
                  type="text"
                  name="destinationCountry"
                  value={this.state.destinationCountry}
                  placeholder="Country"
                  onChange={event => this.destinationOnChangeCountry(event)}
                />
                
                <input
                  type="text"
                  name="destinationCity"
                  value={this.state.destinationCity}
                  placeholder="City"
                  onChange={event => this.destinationOnChangeCity(event)}
                />
                <input
                  type="text"
                  name="destinationState"
                  value={this.state.destinationState}
                  placeholder="State"
                  onChange={event => this.destinationOnChangeState(event)}
                />
              </div>

            </div>
            <div className={"hvr-outline-out-form"}>
            <input type="submit" value="Submit"  className={"formSubmit hvr-outline-out-form"}/>
          </div>
          </form>
        </div>
      </div>
  }
  render() {
    return (
      <div>{this.renderForm()}</div>
      
    );
  }
}

export default App;
