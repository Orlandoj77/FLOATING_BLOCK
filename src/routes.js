import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import InDevelopment from "./pages/InDevelopment";
import Login from "./pages/Login";
import MyNotes from "./pages/MyNotes";
// import Home from "./pages/Home";
import Register from "./pages/Register";
import UseTerms from "./pages/UseTerms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/my-notes" component={MyNotes} />
        <Route path="/development" component={InDevelopment} />
        <Route path="/terms" component={UseTerms} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
