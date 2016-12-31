/**
*
* Item
*
*/

import React from 'react';
import { Flex } from 'reflexbox';


function Item({ item }) {
  return (
    <Flex
      style={styles.item}
      p={1}
      mb={1}
      mx={1}
      align="center"
      justify="flex-start"
    >
      {`card # ${item}`}
    </Flex>
  );
}

Item.propTypes = {
  item: React.PropTypes.number,
};

const styles = {
  item: {
    backgroundColor: '#ffffff',
    borderRadius: '3px',
  },
};

export default Item;
