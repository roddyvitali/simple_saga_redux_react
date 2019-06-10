import React, { Component } from 'react'
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { connect } from 'react-redux';
import { history } from './../../history';
import { unsetUserInfo } from './reducer';

class Main extends Component {
  state = {
    isOpen: false
  };
  logout = () => {
    localStorage.clear();
    this.props.unsetUserInfo();
    history.push('/login');
  }
  render() {
    const { isOpen } = this.state;
    const { user: { username } } = this.props;
    return (
      <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Login Demo para Selit</NavbarBrand>
            <NavbarToggler onClick={ () => this.setState({ isOpen: !isOpen }) } />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={ () => this.logout() }>Cerrar Sesión</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        <Jumbotron>
          <h1 className="display-3">Bienvenido, { username }!</h1>
          <p className="lead">Esta es un app demo de un login, con sesión y experación elaborado por Roddy Vitali.</p>
          <hr className="my-2" />
          <p>Las tecnologias y librerias ocupadas son: React, Redux, Saga, React Router, Axios, Actions, Logger, Reactstrap, JWT, Toastify, Sass.</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.general
  };
};
const mapDispatchToProps = {
  unsetUserInfo
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main);