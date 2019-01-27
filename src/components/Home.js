import React, { Component } from "react";
import ReactSVG from "react-svg";

import travel from "../images/travel.jpg";

import transportation from "../images/plane.svg";
import hotel from "../images/hotel.svg";
import sight from "../images/torii-gate.svg";

class App extends Component {
  render() {
    return (
      <div>
        <div className={"landPage"}>
          <img src={travel} className={"landImage"} />
        </div>
        <div className={"featureSection"}>
          <div>
            <div className={"homeIconWrap"}>
              <ReactSVG src={transportation} className={"homeIcon"} />
            </div>
            <div>
              <div className={"homeHeader"}>Transportation</div><div className={"homeContent"}>Choose a starting airport, destination, and arrival/departure dates. We’ll find the best flights for your needs.</div>
            </div>
          </div>
          <div>
            <div>
              <div className={"homeHeader"}>Hotels</div><div className={"homeContent"}>Choose a destination and arrival/departure dates and we’ll find the best hotels near the location.</div>
            </div>
            <div className={"homeIconWrap"}>
              <ReactSVG src={hotel} className={"homeIcon"} />
            </div>
          </div>
          <div>
            <div className={"homeIconWrap"}>
              <ReactSVG src={sight} className={"homeIcon"} />
            </div>
            <div>
              <div className={"homeHeader"}>Sights</div><div className={"homeContent"}>- No trip is complete without amazing places to visit and activities to experience. Choose a destination and we’ll find the best location.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
