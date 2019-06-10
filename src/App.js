import React from 'react';
import Login from './screens/Login';
import Main from './screens/Main';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './screens/commons/PrivateRoute';
import { isLoggedIn } from './utils/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PrivateRoute exact path="/" component={Main} />
      <Route exact path="/login" render={
        () => isLoggedIn() ? <Redirect to="/" /> : <Login /> 
      }/>
    </div>
  );
}

export default App;
