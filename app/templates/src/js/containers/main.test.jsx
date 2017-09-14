import React from 'react';
import { mount } from 'enzyme';
import { Container } from './Main';

function setup() {
  const props = {};

  const wrapper = mount(<Container {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Тестирование контейнера Main', () => {
  test('Test container Main', () => {
    expect(1).toBe(1);
  });
});
