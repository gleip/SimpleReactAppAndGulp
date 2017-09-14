import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// components
import TestComponent from '../components/Component';

// constants


class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TestComponent />
      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;
