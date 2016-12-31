import React from 'react';

import { Flex } from 'reflexbox';
import {
  Button,
} from 'rebass';
import Icon from 'react-geomicons';

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
            style={styles.boardsButton}
            backgroundColor="#4590bc"
            color="white"
            inverted
            rounded
            p={1}
          >
            <Flex
              flexAuto
              align="center"
            >
              <Icon style={styles.buttonIcon} name="bookmark" />
              Boards
            </Flex>
          </Button>
          <Flex
            style={styles.searchContainer}
            p={0}
            m={0}
          >
            <input
              style={styles.searchInput}
              name="input_example"
              type="text"
            />
            <Button
              style={styles.search}
              backgroundColor="#4590bc"
              color="white"
              inverted
              rounded
            >
              <Icon name="search" style={styles.searchIcon} />
            </Button>
          </Flex>
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
            style={styles.plusButton}
            backgroundColor="#4590bc"
            color="white"
            inverted
            rounded
          >
            <span style={styles.plus}>+</span>
          </Button>
          <Button
            style={styles.headerButton}
            backgroundColor="#4590bc"
            color="white"
            inverted
            rounded
          >
            profile
          </Button>
          <Button
            style={styles.headerButton}
            backgroundColor="#4590bc"
            color="white"
            inverted
            rounded
          >
            <Icon name="info" />
          </Button>
          <Button
            style={styles.bell}
            backgroundColor="#4590bc"
            inverted
            rounded
          >
            <Icon name="chat" />
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
    marginRight: '6px',
  },
  search: {
    padding: '5px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
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
    marginRight: '7px',
  },
  buttonIcon: {
    marginRight: '7px',
  },
  searchInput: {
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    flex: 1,
    border: '0',
    marginRight: '0',
    paddingRight: '0',
    backgroundColor: '#4590bc',
  },
  searchIcon: {
    width: '24px',
  },
  plus: {
    fontWeight: 200,
    fontSize: '32px',
    display: 'flex',
  },
  plusButton: {
    paddingRight: '7px',
    paddingLeft: '7px',
    height: '10px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Header;
