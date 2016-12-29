import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'reflexbox'

import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <Flex
      justify='center'
    >
      this is the header
    </Flex>
        );
  }
}

export default Header;
