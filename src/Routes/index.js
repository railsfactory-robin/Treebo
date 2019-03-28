import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import PublicLayout from './PublicLayout';
import Hotel from '../Components/Hotel';
import HotelDetails from '../Components/HotelDetails'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PublicLayout path="/" component={Hotel} />
          <PublicLayout path="/details/:id" component={HotelDetails} />
        </Switch>
      </Router>
    );
  }
}