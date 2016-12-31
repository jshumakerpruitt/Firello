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
      justify="space-between"
      align="center"
    >
      <h3>fishsite</h3>
      <a
        style={styles.menuLink}
        href="#dummy"
      >Show Menu</a>
    </Flex>

  );
}

const styles = {
  actionBar: {
    boxSizing: 'border-box',
    height: '46px',
    color: '#ffffff',
    right: '0',
  },
  menuLink: {
    color: '#ffffff',
    fontSize: '12px',
  },
};

export default MenuHeader;
