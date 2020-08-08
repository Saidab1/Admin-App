import React from "react";
import "./App.css";
import { WelcomePage } from "./components/WelcomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersonalList } from "./components/PersonalList";
import { PersonalDetail } from "./components/PersonalDetail";
import { Transactions } from "./components/Transactions";
import { CashFlow } from "./components/CashFlow";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/personal">
            <PersonalList />
          </Route>
          <Route exact path="/personal/:id">
            <PersonalDetail />
          </Route>
          <Route exact path="/transactions">
            <Transactions/>
          </Route>
          <Route exact path="/cash-flow">
            <CashFlow/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
