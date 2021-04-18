import React from 'react';
import renderer from 'react-test-renderer';
import {match} from '../src/match';

test('the given component should be render when this paires condition evaluates to true', () => {
  const component = renderer.create(
    <a href="http://www.url.com">Link</a>,
  );
  let tree = match([[true,component]]);
  expect(tree).toMatchSnapshot();
});