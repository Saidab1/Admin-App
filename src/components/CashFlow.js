/**@jsx jsx */
import React from "react";
import { Layout } from "./Layout";
import { jsx, css } from "@emotion/core";
import {
  TransactionsTable,
  MainHeader,
  RowWrapper,
  CashFlowItem,
} from "./StyledComponents";
import { useQuery } from "react-query";
import { getCashFlowData } from "../services/api";

function CashFlow() {
  const { isLoading, data, error } = useQuery("cashFlow", getCashFlowData);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred";

  const incomes = data.income;
  const expenses = data.expense;

  const months = Array.from(
    new Set([...Object.keys(incomes), ...Object.keys(expenses)]).values()
  );
  const companies = Array.from(
    new Set(
      Object.values(incomes).flatMap((companies) => Object.keys(companies))
    )
  );
  const expenseCompanies = Array.from(
    new Set(
      Object.values(expenses).flatMap((companies) => Object.keys(companies))
    )
  );

  return (
    <Layout>
      <MainHeader css={{ width: "90%", margin: "auto" }}>
        <h2>Cash Flow</h2>
      </MainHeader>
      <TransactionsTable
        css={{
          gridTemplateColumns: `repeat(${months.length + 1}, 20%)`,
          rowGap: "25px",
        }}
      >
        <RowWrapper>
          <span></span>
          {months.map((month) => (
            <CashFlowItem>{month}</CashFlowItem>
          ))}
        </RowWrapper>
        <RowWrapper>
          <CashFlowItem css={{ backgroundColor: "#005082", color: "#ffffff" }}>
            Income
          </CashFlowItem>
          <span> </span>
          <span> </span>
          <span> </span>
        </RowWrapper>
        <div>
          {companies.map((company) => (
            <React.Fragment>
              <span>{company}</span>

              {months.map((month) => (
                <span>{incomes[month] ? incomes[month][company] : "-"}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
        <RowWrapper>
          <span css={{ borderTop: "1px solid black" }}>Total Income</span>
          <span css={{ borderTop: "1px solid black" }}>S/. 10000</span>
          <span css={{ borderTop: "1px solid black" }}>S/. 10000</span>
          <span css={{ borderTop: "1px solid black" }}>S/. 10000</span>
        </RowWrapper>
        <RowWrapper>
          <span css={{ backgroundColor: "#ffbd69" }}>Expense</span>
          <span> </span>
          <span> </span>
          <span> </span>
        </RowWrapper>
        <div>
          {expenseCompanies.map((company) => (
            <React.Fragment>
              <span>{company}</span>

              {months.map((month) => (
                <span>{expenses[month] ? expenses[month][company] : "-"}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
        <RowWrapper>
          <CashFlowItem css={{ borderTop: "1px solid black" }}>
            Total Expense
          </CashFlowItem>
          <CashFlowItem css={{ borderTop: "1px solid black" }}>
            S/. 200
          </CashFlowItem>
          <CashFlowItem css={{ borderTop: "1px solid black" }}>
            S/. 250
          </CashFlowItem>
          <CashFlowItem css={{ borderTop: "1px solid black" }}>
            S/. 250
          </CashFlowItem>
        </RowWrapper>

        <RowWrapper>
          <span>Net Balance</span>
          <span>S/. 9800</span>
          <span>S/. 9750</span>
          <span>S/. 9750</span>
        </RowWrapper>
      </TransactionsTable>
    </Layout>
  );
}

export { CashFlow };
