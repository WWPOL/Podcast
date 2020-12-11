import React from "react";

import { Layout } from "upe-react-components";

const ErrorComponent = ({ error, errorInfo }) => (
  <div>
    <h1>Uh oh!</h1>
    <p>Something went wrong!</p>
    <details
      style={{ whiteSpace: "pre-wrap", maxHeight: "50%", overflowY: "auto" }}
    >
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  </div>
);

export default ({ children }) => (
  <Layout errorComponent={ErrorComponent}>{children}</Layout>
);
