import React from "react";
import styled from "styled-components";

import SEO from "../components/SEO";
import Sign from "../components/Sign";

const Landing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    max-width: 500px;
    text-align: center;
  }
`;

const IndexPage = () => (
  <>
    <SEO title="Home" route="/" />
    <Landing>
      <h1>Welcome</h1>
      <p>It's Barry Boy Time</p>
      <Sign size="large" />
    </Landing>
  </>
);

export default IndexPage;
