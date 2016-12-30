/**
*
* Item
*
*/

import React from 'react';
import { Flex } from 'reflexbox'



function Item() {
  return (
    <Flex
      style={styles.item}
      p={1}
      mb={1}
      mx={1}
      align='center'
      justify='center'
    >
      card
    </Flex>
  );
}

const styles = {
  item: {
    backgroundColor: '#ffffff',
    borderRadius: '3px',
  },
}

export default Item;
