/**
 *
 * SignupBox
 *
 */

import React, { Component } from 'react';
import { Flex } from 'reflexbox'
import {
  Input,
  Button,
} from 'rebass'

const submitSignup = () => {
  console.log('submit')
}

class SignupBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.signUp = this.signUp.bind(this)
  }

  componentDidMount() {
    //this.props.auth.signOut()
  }

  signUp() {
    // .createUserWithEmailAndPassword(this.state.email, this.state.password)
    this.props.submitSignup(this.state.email, this.state.password)
/*
    this.props
          .auth
          .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(x => { console.log('resolved', this.props.auth.currentUser)})
    console.log('user: ', this.props.auth.currentUser)
    */

  }

  render() {
    return (
      <Flex
        style={styles.signupBox}
        flexColumn
        justify='center'
      >
        <Flex
          flexColumn
        >
          <Input
            onChange={(e) => {this.setState({email: e.target.value})}}
            hideLabel
            label="Email"
            name="email"
            placeholder="Email"
            rounded
            type="text"

          />
          <Input
            onChange={(e) => {this.setState({password: e.target.value})}}
            hideLabel
            label="Password"
            name="password"
            placeholder="Password"
            rounded
            type="text"
          />
          <Button
            rounded
            onClick={this.signUp}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    );
  }
}

const styles = {
  signupBox: {
    width: '500px',
  },
  border: {
    border: '1px solid black',
  }
}

export default SignupBox;
