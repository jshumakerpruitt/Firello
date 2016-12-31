import React from 'react';
import { Flex } from 'reflexbox';

import Header from 'components/Header';

function App(props) {
  return (
    <Flex
      style={styles.home}
      flexColumn
      align="center"
    >
      <Header />
      <Flex
        flexAuto
        style={styles.stretchY}
      >
        <Flex
          flexAuto
        >
          {React.Children.toArray(props.children)}
        </Flex>
      </Flex>
    </Flex>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

const styles = {
  home: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0079bf',
  },
  stretchY: {
    width: '100%',
  },
};
export default App;
