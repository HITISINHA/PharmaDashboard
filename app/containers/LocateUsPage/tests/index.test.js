import React from 'react';
import { shallow } from 'enzyme';

import LocateUsPage from '../index';

describe('<LocateUsPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<LocateUsPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<LocateUsPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
