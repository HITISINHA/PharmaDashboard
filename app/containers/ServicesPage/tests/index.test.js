import React from 'react';
import { shallow } from 'enzyme';

import ServicesPage from '../index';

describe('<ServicesPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<ServicesPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ServicesPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
