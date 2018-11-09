import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Login extends Component {

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  }

  constructor(){
    super()
    this.state = {
      user: {}
    }
    this.login = this.login.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLoginChange(e) {
    this.setState({user: {...this.state.user, login: e.target.value}});
  }

  handlePasswordChange(e) {
    this.setState({user: {...this.state.user, password: e.target.value}});
  }

  login(){
    localStorage.setItem('user', JSON.stringify(this.state.user))
    this.props.history.push({
      pathname: '/',
    })
  }

  render(){

    let {login, password} = this.state.user

    return (
      <form id='login-form'>
        <ControlLabel>Login Form</ControlLabel>
        <FormGroup>
          <FormControl
            name="login"
            type="text"
            value={this.state.user.login}
            onChange={this.handleLoginChange}
            placeholder="Login"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            name="password"
            type="password"
            value={this.state.user.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
        </FormGroup>
        <Button id="login-btn" bsStyle="primary" onClick={this.login} disabled={!login || !password}>Log in</Button>
      </form>
    )
  }

}

export default Login
