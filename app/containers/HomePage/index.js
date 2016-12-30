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
import Board from 'components/Board';
import MenuHeader from 'components/MenuHeader';
import {createDb } from 'utils/firebase' 
import * as firebase from 'firebase'


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { token: '', speed: 0 };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref().child('react')
    const speedRef = dbRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val(),
      })
    })
  }

  render() {
    return (
      <Flex
        style={styles.homePage}
        px={1}
        align='flex-start'
        flexColumn
      >
        <MenuHeader /> 
        <Flex>
          <Flex
            flexColumn
          >
            <Board items={[1,1,1,1,1,1,1]}/>
          </Flex>
          <Flex
            flexColumn
          >
            <Board items={[1,1,1,1,1,1]}/>
          </Flex>
          <Flex
            flexColumn
          >
            <Board items={[1,1,1,1,1,1,1,1,1,1]}/>
          </Flex>
        </Flex>
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
