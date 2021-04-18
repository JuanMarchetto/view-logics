import React from 'react';
import renderer from 'react-test-renderer';
import { match } from '../src/match';

const component = renderer.create(
    <a href="http://www.url.com">Link</a>,
  );

const otherComponent = renderer.create(
    <p>ups somethings if wrong</p>,
  );

test('the given component should be render when this paires condition evaluates to true', () => {
  const tree = match([[true,component]]);
  expect(tree).toMatchSnapshot();
});

test('first true condition acompanion component should render', () => {
    const tree = match([
        [false, otherComponent],
        [false, otherComponent],
        [true,component]
    ]);
    expect(tree).toMatchSnapshot();
});
  
test("shouldn't render anything when condition evaluates to false", () => {
    const tree = match([[false,component]]);
    expect(tree).toMatchSnapshot();
});

test("should render the negative case if is defined when condition evaluates to false", () => {
  const tree = match([[false, otherComponent, component]]);
  expect(tree).toMatchSnapshot();
});

test("should'nt render element after match case true", () => {
  const tree = match([
    [true, component],
    [true, otherComponent]
  ]);
  expect(tree).toMatchSnapshot();
});


test("should'nt render element after match case false", () => {
  const tree = match([
    [false, otherComponent, component],
    [true, otherComponent]
  ]);
  expect(tree).toMatchSnapshot();
});

