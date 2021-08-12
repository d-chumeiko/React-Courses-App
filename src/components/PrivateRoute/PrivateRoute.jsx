import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ADMIN_ROLE, COURSES_PATH } from '../../constants';

const PrivateRoute = ({ comp: Component, role, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      role === ADMIN_ROLE ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: COURSES_PATH,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
