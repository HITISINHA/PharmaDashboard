import React from 'react';
import { shallow } from 'enzyme';

import ProductsPage from '../index';

describe('<ProductsPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<ProductsPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ProductsPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
