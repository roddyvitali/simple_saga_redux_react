import React from 'react';
import Login from './screens/Login';
import Main from './screens/Main';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './screens/commons/PrivateRoute';
import { isLoggedIn } from './utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/" component={Main} />
      <Route path="/login" render={() => {
        console.log(isLoggedIn())
        return isLoggedIn() ? <Redirect to="/" /> : <Login />
        }
        }/>
      <Route render={() => {
        console.log(isLoggedIn())
        return isLoggedIn() ? <Redirect to="/" /> : <Login />
        }
        }/>
    </div>
  );
}

export default App;
