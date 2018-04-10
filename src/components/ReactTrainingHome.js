/**
 * @author evivehealth on 10/04/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(store => ({ reactTrainingStore: store.reactTrainingStore }))
class ReactTrainingHome extends Component {
  render() {
    return (
      <div>
        <h1>React Training</h1>
        <h6>{this.props.reactTrainingStore.testValue}</h6>
      </div>
    );
  }
}

export default ReactTrainingHome;
