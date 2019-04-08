import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [token, setToken] = React.useState(
    localStorage.getItem("nineteenAuthToken")
  );
  const [expire] = React.useState(
    localStorage.getItem("nineteenAuthTokenExpire")
  );

  React.useEffect(() => {
    localStorage.setItem("nineteenAuthToken", token);
  }, [token]);

  var handleExpiration = setInterval(function() {
    if (parseInt(expire) - Math.floor(Date.now() / 1000) + 3600 <= 0 && token) {
      setToken("");
      clearInterval(handleExpiration);

      window.location.href = "/login";
    }
  }, 5000);

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
