import React from "react";
import { connect } from 'react-redux';

import '../font-awesome-icons';
import { MainPage, CartPage, ItemPage } from "../pages";
import AppHeader from "../app-header";
import { Route, Switch } from "react-router-dom";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" component={CartPage} />
        <Route  path="/:id" component={ItemPage} />
      </Switch>
    </div>
  ); 
}; 

const mapStateToProps = (state) => {
   return {
     total: state.total
   };
};

export default connect(mapStateToProps)(App); 