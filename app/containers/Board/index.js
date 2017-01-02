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

import { } from './selectors';
import { } from 'containers/App/selectors';
import Board from 'components/Board';
import MenuHeader from 'components/MenuHeader';
import * as firebase from 'firebase';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { token: '', speed: 0 };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref().child('react');
    const speedRef = dbRef.child('speed');
    speedRef.on('value', (snap) => {
      this.setState({
        speed: snap.val(),
      });
    });
  }

  render() {
    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="flex-start"
      >
        <MenuHeader />
        <Flex
          style={styles.cards}
        >
          <Flex
            flexColumn
          >
            <Board items={[1, 2, 3, 4, 5, 6, 7]} />
          </Flex>
          <Flex
            flexColumn
          >
            <Board items={[1, 1, 1, 1, 1, 1]} />
          </Flex>
          <Flex
            flexColumn
          >
            <Board items={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

const styles = {
  homePage: {
  },
  cards: {
    position: 'absolute',
    top: 86,
  },
};

HomePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, actions)(HomePage);
