import React from 'react';
import Helmet from 'react-helmet';
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
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0079bf',
  },
};
export default App;
