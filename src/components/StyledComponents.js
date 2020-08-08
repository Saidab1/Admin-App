import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const AppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 18% 82%;
  grid-template-rows: 0.2fr 2fr 2fr;
  grid-template-areas:
    "header header"
    "sideBar  main"
    "sideBar main";
`;
const Header = styled.header`
  width: 100%;
  background-color: #014461;
  height: 80px;
  grid-area: header;
  padding-left: 50px;
`;

const SideBar = styled.section`
  background-color: #01354b;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding-top: 30px;
  padding-left: 35px;
  grid-area: sideBar;
  display: flex;
  flex-direction: column;
  // align-items:left;
`;

const Nav = styled.nav`
  display: flex;
  min-height: 200px;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #ffffff;
  &:hover {
    width: 60%;
    background-color: #185270;
    color: #58ace1;
  }
`;

const MainContainer = styled.main`
  grid-area: main;
  width: 80%;
  margin: auto;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-style: none;
  border-radius: 12px;
  background-color: #185270;
  color: #ffffff;
  font-weight: bold;
  margin-right: 20px;
`;

const ListItem = styled.li`
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid #185270;
  padding-bottom: 5px;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const TransactionsTable = styled.div`
width:90%;
margin:auto;
text-align:center;
margin-top:15px;
border-collapse: collapse;
  background-color: #eeeeee;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 10% 30% 30% 10% 10%;
  justify-content:space-between;
  // column-gap:10px;
  row-gap:15px;
  & > div {
    display: contents;
  }
`;

const TransactionsTableNames = styled.span`
  font-weight:bold; 
`;

const CashFlowItem = styled.span`
  font-weight:bold;
 // background-color:lightgray;
 border-bottom:1px solid black;
`;

const RowWrapper = styled.div`
  border-bottom:1px solid black;
  font-weight:bold;
`;

export {
  AppContainer,
  Header,
  SideBar,
  MainContainer,
  Nav,
  StyledNavLink,
  Button,
  ListItem,
  MainHeader,
  TransactionsTable, 
  TransactionsTableNames,
  CashFlowItem,
  RowWrapper
};
