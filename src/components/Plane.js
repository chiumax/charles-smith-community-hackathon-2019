import React, { Component } from "react";
import ReactSVG from "react-svg";
import { Router, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

import travel from "../images/travel.jpg";

import transportation from "../images/plane.svg";
import departure from "../images/departure.svg";
import hotel from "../images/hotel.svg";
import sight from "../images/torii-gate.svg";
import arrowRight from "../images/arrow-right.svg";

class App extends Component {
  state = {
    Departvalue:[{id:"ASK",name:"Yestopher"}],
    Arrivalvalue: [{id:"YEE",name:"YICK"}],
    redirect: false
  };
  componentDidMount(){
    
    this.setState({Departvalue:this.props.data.data.departure,Arrivalvalue:this.props.data.data.arrival});
  }
  handleChangeDeparture = event => {
    this.setState({ Departvalue: event.target.value });
  };

  handleChangeArrival = event => {
    this.setState({ Arrivalvalue: event.target.value });
  };
  handleSubmit = event => {
    console.log(event.target);
     this.setState({redirect: true
     })
  }
  renderForm = () => {
    return !!this.state.redirect ? <Redirect to='/hotel' />:<div className={"formPage"}>
        <div className={"formCard"}>
        <ReactSVG src={departure} className={"formIcon"}/>
          <form onSubmit={this.handleSubmit} className={"formWrap"}>
          <div className={"formTitle"}>Step Two: Travel</div>
            <div className={"formInput"}>
              <div>
                <div>Departure: </div>
                <select
              name={"Departure"}
              value={this.state.Departvalue}
              onChange={this.handleChangeDeparture}
              >
              <option value="" disabled>Select Airport</option>
              {console.log(this.state.Departvalue)}
              {this.state.Departvalue.map(option => {
                return (
                  <option
                    key={option.id}
                    value={option.id}
                    >{option.name}
                  </option>
                );
              })}
            </select>
                
              </div>
              <ReactSVG src={arrowRight} className={"formSVG"}/>
              <div>
                <div >Arrival: </div>
                <select
              name={"Arrival"}
              value={this.state.Arrivalvalue}
              onChange={this.handleChangeArrival}
              >
              <option value="" disabled>Select Airport</option>
              {this.state.Arrivalvalue.map(option => {
                return (
                  <option
                    key={option.id}
                    value={option.id}
                    >{option.name}
                  </option>
                );
              })}
            </select>
                
                
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
