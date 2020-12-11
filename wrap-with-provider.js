import React, { Fragment } from "react";
import { navigate } from "gatsby";
import { withTheme } from "styled-components";

import {
  setLayoutBase,
  setFirebaseClass,
  setWithAuthorizationWrapper,
  WithAuthorizationClass,
} from "upe-react-components";

import Firebase from "./src/components/Firebase";
import Header from "./src/components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default ({ element }) => {
  setFirebaseClass(Firebase);

  const WithAuthorizationWrapper = props => {
    const AuthorizationFailed = () => (
      <div>
        <h3>You don't have permission to view this page!</h3>
        <p>If you believe you should have access, please contact an admin.</p>
      </div>
    );

    return (
      <WithAuthorizationClass
        firebaseAuthNext={authUser => {
          if (!authUser) {
            navigate("/");
          }
        }}
        firebaseAuthFallback={() => {
          navigate("/");
        }}
        authorizationFailed={<AuthorizationFailed />}
        {...props}
      />
    );
  };

  setWithAuthorizationWrapper(WithAuthorizationWrapper);

  const LayoutBase = withTheme(({ theme, children }) => (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  ));
  LayoutBase.displayName = "LayoutBase";
  setLayoutBase(LayoutBase);

  return element;
};
