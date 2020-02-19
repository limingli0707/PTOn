// Link.react.test.js
import React from 'react';
import Line from './LineChart';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});


test('Line test', () => {
  const component = shallow(
    <Line/>
  );
//  let profile = component.toJSON();
  expect(toJson(component)).toMatchSnapshot();
});