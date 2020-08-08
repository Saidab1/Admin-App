/**@jsx jsx*/
import React from "react";
import { jsx } from "@emotion/core";
import {
  AppContainer,
  Header,
  SideBar,
  MainContainer,
  Nav,
  StyledNavLink,
} from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Layout({ children }) {
  return (
    <AppContainer>
      <Header>
        <p css={{ fontSize: "25px", color: "#ffffff", marginTop: "25px" }}>
          Tekton Admin
        </p>
      </Header>
      <SideBar>
        <div css={{ marginBottom: "50px" }}>
          <h2 css={{ marginBottom: "25px" }}>
            {" "}
            <FontAwesomeIcon
              css={{ marginRight: "10px", verticalAlign: "text-top" }}
              icon={faUser}
            />
            Welcome
          </h2>
          <p
            css={{
              backgroundColor: "#185270",
              color: "#f3c623",
              padding: "10px",
              width: "55%",
              fontSize: "16px",
              letterSpacing: "2px",
            }}
          >
            Currency: Soles
          </p>
        </div>

        <Nav>
          <StyledNavLink exact to="/personal">
            <FontAwesomeIcon
              css={{ marginRight: "10px", verticalAlign: "text-top" }}
              icon={faArrowCircleRight}
            />
            Personal
          </StyledNavLink>
          <StyledNavLink exact to="/transactions">
            <FontAwesomeIcon
              css={{ marginRight: "10px", verticalAlign: "text-top" }}
              icon={faArrowCircleRight}
            />
            Transactions
          </StyledNavLink>
          <StyledNavLink exact to="/cash-flow">
            <FontAwesomeIcon
              css={{ marginRight: "10px", verticalAlign: "text-top" }}
              icon={faArrowCircleRight}
            />
            Cash Flow
          </StyledNavLink>
          <StyledNavLink exact to="/petty-cash">
            <FontAwesomeIcon
              css={{ marginRight: "10px", verticalAlign: "text-top" }}
              icon={faArrowCircleRight}
            />
            Petty Cash
          </StyledNavLink>
        </Nav>
      </SideBar>
      <MainContainer>{children}</MainContainer>
    </AppContainer>
  );
}

export { Layout };
