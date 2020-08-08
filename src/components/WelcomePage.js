/**@jsx jsx*/
import React from "react";
import { Layout } from "./Layout";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";

function WelcomePage() {
  return (
    <Layout>
      <div css={{ display: "flex", flexDirection: "column", Height: "100vh" }}>
        <div css={{ marginBottom: "8%" }}>
          <h1 css={{ fontSize: "40px", marginBottom: "15px" }}>
            Welcome to Teckton Admin
          </h1>
          <p css={{ fontSize: "20px" }}>An app built with React</p>
        </div>

        <div>
          <h2 css={{ marginBottom: "15px" }}>What do you want to see?</h2>
          <div>
            <Link to="/personal">
              <Button>Personal</Button>
            </Link>
            <Link to="/transactions">
              <Button>Transactions</Button>
            </Link>
            <Link to="/cash-flow">
              <Button>Cash Flow</Button>
            </Link>
            <Link to="/petty-cash">
              <Button>Petty Cash</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export { WelcomePage };
