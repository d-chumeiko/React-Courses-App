import React, { useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { authUser } from './store/user/thunk';

import Header from './components/Header/';
import Courses from './components/Courses/';
import Login from './components/Login';
import Registration from './components/Registration';

import { COURSES_PATH, LOGIN_PATH, REGISTRATION_PATH } from './constants';
import './App.scss';

const Main = ({ token, authUser }) => {
  useEffect(() => {
    if (token) {
      authUser(token);
    }
  });

  return (
    <>
      <Header />

      <main className='main'>
        <Switch>
          <Route path={COURSES_PATH} component={Courses} />

          <Route exact path={LOGIN_PATH} component={Login} />

          <Route exact path={REGISTRATION_PATH} component={Registration} />

          <Redirect from='/' to={COURSES_PATH} />
        </Switch>
      </main>
    </>
  );
};

Main.propTypes = {
  token: PropTypes.string,
  authUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const MainContainer = connect(mapStateToProps, { authUser })(Main);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </BrowserRouter>
);

export default App;
