import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'reflexbox';
import {
  Button,
} from 'rebass';

import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Flex
        style={styles.header}
        align="center"
        justify="space-between"
      >
        <Flex style={styles.headerGroup} >
          <Button
            style={ styles.boardsButton}
            backgroundColor='#4590bc'
            color="white"
            inverted
            rounded
          >
          Boards
          </Button>
          <Button
            style={styles.search}
            backgroundColor='#4590bc'
            color="white"
            inverted
            rounded
          >
          Search
          </Button>
        </Flex>
        <Flex
          style={styles.headerGroup}
          justify="center"
        >
          <h2 style={styles.logo}>
        Trello
            </h2>
        </Flex>
        <Flex
          style={styles.headerGroup}
          justify="flex-end"
        >
          <Button
            style={styles.headerButton}
            backgroundColor='#4590bc'
            color="white"
            inverted
            rounded
          >
          add
          </Button>
          <Button
            style={styles.headerButton}
            backgroundColor='#4590bc'
            color="white"
            inverted
            rounded
          >
          profile
          </Button>
          <Button
            style={styles.headerButton}
            backgroundColor='#4590bc'
            color="white"
            inverted
            rounded
          >
          info
          </Button>
          <Button
            style={styles.bell}
            backgroundColor='#4590bc'
            inverted
            rounded
          >
          bell
          </Button>
        </Flex>
      </Flex>
    );
  }
}

const styles = {
  header: {
    height: '40px',
    backgroundColor: '#026aa7',
    color: '#7fb3d1',
    width: '100%',
  },
  headerGroup: {
    flex: 1,
  },
  logoWrapper: {
  },
  boardsButton: {
    width: '92px',
    marginLeft: '5px',
  },
  search: {
    width: '182px',
    marginLeft: '7px',
  },
  headerButton: {
    marginLeft: '7px',
  },
  logo: {
    fontFamily: "'Yellowtail', cursive",
    color: '#7fb3d1',
  },
  bell: {
    marginLeft: '7px',
    marginRight: '5px',
  },
};

export default Header;
