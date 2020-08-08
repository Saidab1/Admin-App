/**@jsx jsx */
import React from "react";
import { Layout } from "./Layout";
import { MainHeader,TransactionsTable, TransactionsTableNames  } from "./StyledComponents";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

function Incomes() {
  return (
    <Layout>
      <MainHeader css={{ width: "90%", margin: "auto" }}>
        <h2>Incomes</h2>
        <div css={{display:"flex", width:"30%", justifyContent:"space-between"}}>
          <Link to="/incomes/new">
            <button css={{ padding: "8px" }}>Add new income</button>
          </Link>
          <Link
            to="/transactions"
            css={{ textDecoration: "none", color: "#000000" }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            Back
          </Link>
        </div>
      </MainHeader>
      <TransactionsTable
      >
        <div>
          <TransactionsTableNames>Date</TransactionsTableNames>
          <TransactionsTableNames>Company</TransactionsTableNames>
          <TransactionsTableNames>Description</TransactionsTableNames>
          <TransactionsTableNames>Income</TransactionsTableNames>
        </div>

        <div>
          <span>08-06-2020</span>
          <span>Bonnie Carwash</span>
          <span>One carwash service</span>
          <span css={{textAlign:"center"}}>-</span>
          <span>S/.100</span>
        </div>
        <div>
          <span>08-06-2020</span>
          <span>Tekton Labs</span>
          <span>Invoice number 123456</span>
          <span>S/. 20000</span>
        </div>
      </TransactionsTable>
    </Layout>
  );
}

export {Incomes}
