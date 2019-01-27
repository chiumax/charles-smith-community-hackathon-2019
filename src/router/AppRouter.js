import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// import NotFoundPage from "../components/NotFoundPage";
import Home from "../components/Home"
// import MapPage from "../components/MapPage"

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

// <Route path="/map" component={MapPage} exact={true} />
//         <Route component={NotFoundPage} />