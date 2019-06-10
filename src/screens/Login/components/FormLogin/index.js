import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { loginRequesting } from './../../reducer';
import './styles.scss';
class FormLogin extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }
  onChange = ({name, value}) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }
  render() {
    const { login: { requesting }, loginRequesting } = this.props;
    const { user } = this.state;
    return (
      <Form className="form-login">
        <FormGroup>
          <Label for="username">Usuario</Label>
          <Input onChange={ ({target}) => this.onChange(target) } value={ user.username } type="text" name="username" id="username" placeholder="Introduce un usuario" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input onChange={ ({target}) => this.onChange(target) } value={ user.password } type="password" name="password" id="password" placeholder="Introduce una contraseña" />
        </FormGroup>
        <Button color="primary" 
          disabled={requesting}
          onClick={
            () => loginRequesting(user)
          }>
            { requesting && <Spinner color="warning" size="sm"/> } Ingresar</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = {
  loginRequesting
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FormLogin);