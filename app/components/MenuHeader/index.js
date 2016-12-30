/**
 *
 * MenuHeader
 *
 */

import React from 'react';
import { Flex } from 'reflexbox';


function MenuHeader() {
  return (
    <Flex
      p={1}
      style={styles.actionBar}
      justify='space-between'
      align='center'
    >
      <h3>fishsite</h3>
      <a
        style={styles.menuLink}
        href='#'>Show Menu</a>
    </Flex>

  );
}

const styles = {
  actionBar: {
    height: '46px',
    width: '100vw',
    color: '#ffffff',
  },
  menuLink: {
    color: '#ffffff',
    fontSize: '12px',
    marginRight: '15px',
    
  }
}

export default MenuHeader;
