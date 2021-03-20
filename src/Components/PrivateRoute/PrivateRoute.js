import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';


const PrivateRoute = ({children, ...rest}) => {
    const [login, setLogin] = useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          login.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;