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
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
          Boards
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
          search
          </Button>
        </Flex>
        <Flex
          style={styles.headerGroup}
          justify="center"
        >
        Trello
        </Flex>
        <Flex
          style={styles.headerGroup}
          justify="flex-end"
        >
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
          add
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
          profile
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
          info
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
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
    color: 'white',
    width: '100%',
  },
  headerGroup: {
    flex: 1,
  },
  logoWrapper: {
  },
};

export default Header;
