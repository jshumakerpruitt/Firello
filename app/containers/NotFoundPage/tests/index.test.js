/**
 * Testing the NotFoundPage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(
      <h1>
        <FormattedMessage
          id="boilerplate.containers.NotFoundPage.header"
          defaultMessage={'Page not found.'}
        />
      </h1>)).toEqual(true);
  });
});
