import React, { Component } from 'react';
import Credentials from './components/Credentials';
import FormLogin from './components/FormLogin';
import logo from './../../logo.svg';
import './styles.scss';

export default class Login extends Component {
  render() {
    return (
      <div className="login-screen">
        <img src={logo} className="App-logo" alt="logo" />
        <FormLogin />
        <Credentials />
      </div>
    )
  }
}
