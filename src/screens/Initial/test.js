import React from 'react';
import Initial from './index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Initial />).toJSON();
  expect(rendered).toBeTruthy();
});
