/**@jsx jsx*/
import React from "react";
import { Layout } from "./Layout";
import { jsx } from "@emotion/core";
import {
  MainHeader,
  TransactionsTable,
  TransactionsTableNames,
} from "./StyledComponents";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getIncomes, getExpenses } from "../services/api";
import { parseISO,format } from 'date-fns';

function Transactions() {
  const {
    isLoading: isLoadingIncomes,
    data: incomes,
    error: errorIncomes,
  } = useQuery("incomes", getIncomes);

  const {
    isLoading: isLoadingExpenses,
    data: expenses,
    error: errorExpenses,
  } = useQuery("expenses", getExpenses);

  if (isLoadingIncomes || isLoadingExpenses) return "Loading...";

  if (errorExpenses || errorIncomes) return "An error has occurred";

  const allIncomes = incomes.map((income) => ({ ...income, type: "income" }));
  const allExpenses = expenses.map((expense) => ({
    ...expense,
    type: "expense",
  }));

  const transactions = [...allExpenses, ...allIncomes];
  const orderedTransactions = transactions.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <Layout>
      <MainHeader css={{ width: "90%", margin: "auto" }}>
        <h2>Transactions</h2>
        <Link to="/transactions/new">
          <button css={{ padding: "8px" }}>Add new transaction</button>
        </Link>
      </MainHeader>
      <TransactionsTable>
        <div>
          <TransactionsTableNames>Date</TransactionsTableNames>
          <TransactionsTableNames>Company</TransactionsTableNames>
          <TransactionsTableNames>Description</TransactionsTableNames>
          <TransactionsTableNames>Income</TransactionsTableNames>
          <TransactionsTableNames>Expense</TransactionsTableNames>
        </div>
        {orderedTransactions.map((transaction) => (
          <div>
            <span>{format(parseISO(transaction.date), 'MM-dd-yyyy')}</span>
            <span>{transaction.company_name}</span>
            <span>{transaction.description}</span>
            {transaction.type === "income" ? (
              <React.Fragment>
                <span>S/.{transaction.total_amount}</span>
                <span>-</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span css={{ textAlign: "center" }}>-</span>
                <span>S/.{transaction.total_amount}</span>
              </React.Fragment>
            )}
          </div>
        ))}
      </TransactionsTable>
    </Layout>
  );
}

export { Transactions };
