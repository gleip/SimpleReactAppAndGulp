import * as React from 'react';
import * as ReactRedux from 'react-redux';

// actions

// components
import Component from '../components/Component';

// constants


class Container extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Component name={'Совсем новая'} />
      </div>
    );
  }
}

const main = ReactRedux.connect(state => ({}), dispatch => ({}))(Container);

export default main;
