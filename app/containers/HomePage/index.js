/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';

import { Flex } from 'reflexbox';

import { } from '../App/actions';
import { } from './selectors';
import { } from 'containers/App/selectors';
import SignupBox from 'components/SignupBox';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { token: '' };
  }

  render() {
    return (
      <Flex
        style={styles.homePage}
        flexColumn
        flexAuto
        justify="center"
        align="center"
      >
        <SignupBox
          storeToken={this.storeToken}
          auth={this.auth}
          submitSignup={this.props.submitSignIn}
        />
      </Flex>
    );
  }
}

const styles = {
  homePage: {
    width: '100vw',
  },
};

HomePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, actions)(HomePage);
