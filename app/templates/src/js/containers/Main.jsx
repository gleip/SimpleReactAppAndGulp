import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import className from 'classnames';

// actions

// components
import TestComponent from '../components/Component';

// constants


class Container extends Component {
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

Container.propTypes = {

};

const Main = connect(state => ({}), dispatch => ({}))(Container);

export default Main;
