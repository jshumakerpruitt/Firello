import React from 'react';
import Helmet from 'react-helmet';
import { Flex } from 'reflexbox'

import Header from 'components/Header';
import Footer from 'components/Footer';

function App(props) {
  return (
    <Flex
      style={{height: '100vh'}}
      flexColumn
      align='center'
    >
      <Header />
      <Flex
        flexAuto
      >
        {React.Children.toArray(props.children)}
      </Flex>
      <Footer />
    </Flex>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
