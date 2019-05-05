/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MovieCard from './MovieCard'
import ReactTrainingHome from './ReactTrainingHome';
import FuelSavingsPage from './containers/FuelSavingsPage';
//import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={MovieCard} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/react-training" component={ReactTrainingHome} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
