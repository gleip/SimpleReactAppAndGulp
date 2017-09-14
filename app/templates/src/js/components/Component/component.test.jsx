import React from 'react';
import { shallow } from 'enzyme';
import Component from './';

function setup(newProps = {}) {
  const props = {};

  const commonProps = { ...props, ...newProps };

  const wrapper = shallow(<Component {...commonProps} />);
  return {
    props,
    wrapper,
  };
}

describe('Тестирование компонента Component', () => {
  test('Test component Component', () => {
    expect(1).toBe(1);
  });
});
