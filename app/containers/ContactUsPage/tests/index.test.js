import React from 'react';
import { shallow } from 'enzyme';

import ContactUsPage from '../index';

describe('<ContactUsPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<ContactUsPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ContactUsPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
