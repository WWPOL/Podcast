import React, { useContext } from "react";
import { Link } from "gatsby";

import { AuthUserContext, withFirebase } from "upe-react-components";

const Header = ({ firebase }) => {
  const authUser = useContext(AuthUserContext);

  const doLogin = () => firebase.doGoogleSignIn();
  const doLogout = () => firebase.doSignOut();

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          flexGrow: 1,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            The Barry Boys Show
          </Link>
        </h1>
      </div>
      <div style={{ marginRight: 20 }}>
        {authUser ? (
          <>
            <span style={{ color: "white", marginRight: 20 }}>
              Hi {authUser.displayName}!
            </span>
            <button style={{ height: "fit-content" }} onClick={doLogout}>
              Logout
            </button>
          </>
        ) : (
          <button style={{ height: "fit-content" }} onClick={doLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default withFirebase(Header);
