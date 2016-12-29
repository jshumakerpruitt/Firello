/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { Flex } from 'reflexbox'


import { } from '../App/actions';
import { } from './actions';
import { } from './selectors';
import { } from 'containers/App/selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }

  render() {
    let mainContent = null;

    return (
      <Flex>
        <h1>hi.</h1>
      </Flex>
    );
  }
}

HomePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(HomePage);
