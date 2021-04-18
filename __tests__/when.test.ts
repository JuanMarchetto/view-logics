import React from 'react';
import renderer from 'react-test-renderer';
import { when } from '../src/when';

const component = renderer.create(
    <a href="http://www.url.com">Link</a>,
  );

const otherComponent = renderer.create(
    <p>ups somethings if wrong</p>,
  );

test('the given component should be render when this paires condition evaluates to true', () => {
  const tree = when([[true,component]]);
  expect(tree).toMatchSnapshot();
});

test('first true condition acompanion component should render', () => {
    const tree = when([
        [false, otherComponent],
        [false, otherComponent],
        [true,component]
    ]);
    expect(tree).toMatchSnapshot();
});
  
test("shouldn't render anything when condition evaluates to false", () => {
    const tree = when([[false,component]]);
    expect(tree).toMatchSnapshot();
});


test('should render all component wich paired condition evaluates to true', () => {
  const tree = when([
      [true, otherComponent],
      [false, otherComponent],
      [false,component],
      [true,component]
  ]);
  expect(tree).toMatchSnapshot();
});

test('should render all component wich paired condition evaluates to true and the alternates that matches with false', () => {
  const tree = when([
      [true, otherComponent, component],
      [false, otherComponent, component],
      [false, otherComponent, component],
      [true, otherComponent, component],
  ]);
  expect(tree).toMatchSnapshot();
});
