import React from 'react';
import renderer from 'react-test-renderer';
import { times } from '../src/times';

const component = renderer.create(
    <a href="http://www.url.com">Link</a>,
  );

const otherComponent = renderer.create(
    <p>ups somethings if wrong</p>,
  );

test('the given component should be render when this paires condition evaluates to true', () => {
  const tree = times([[true,component]]);
  expect(tree).toMatchSnapshot();
});

test('first true condition acompanion component should render', () => {
    const tree = times([
        [false, otherComponent],
        [false, otherComponent],
        [true,component]
    ]);
    expect(tree).toMatchSnapshot();
});
  
test("shouldn't render anything when condition evaluates to false", () => {
    const tree = times([[false,component]]);
    expect(tree).toMatchSnapshot();
});

test('components should render numer of times indicated in the firs memerb of each pair', () => {
  const tree = times([
      [5, otherComponent],
      [2,component],
      [4, otherComponent],
  ]);
  expect(tree).toMatchSnapshot();
});
