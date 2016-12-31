/**
 *
 * Board
 *
 */

import React from 'react';
import { Flex } from 'reflexbox';
import uuid from 'uuid/v4';

import Item from 'components/Item';


const Board = (props) => (
  <Flex
    style={styles.board}
    flexColumn
    mr={1}
  >
    <Flex
      p={1}
      style={styles.listTitle}
    >ListName</Flex>
    {props.items.map((item) => <Item key={uuid()} item={item} />)}
  </Flex>
);
const styles = {
  board: {
    backgroundColor: '#e2e4e6',
    borderRadius: '3px',
    width: '271px',
    flexGrow: 0,
    flexShrink: 1,
  },
  listTitle: {
    fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    color: '#4d4d4d',
  },
};

Board.propTypes = {
  items: React.PropTypes.array,
};
export default Board;
