import * as React from 'react';

export interface Props {
  name: string;
}

const component = ({ name }: Props) => (
  <div>
    <h1>{name}</h1>
  </div>
);

export default component;
