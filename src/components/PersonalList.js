/**@jsx jsx */
import React from "react";
import { Layout } from "./Layout";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { MainHeader } from "./StyledComponents";
import { useQuery } from "react-query";
import { getEmployees } from "../services/api";

export function ItemContainer({ itemName, itemContent }) {
  return (
    <div css={{ textAlign: "center" }}>
      <h3 css={{ fontSize: "16px", marginBottom: "3px" }}>{itemName}</h3>
      <p>{itemContent}</p>
    </div>
  );
}

function PersonalList() {
  const { isLoading, error, data } = useQuery("employees", getEmployees);

  if (isLoading) return "Loading...";
  

  if (error) return "An error has occurred";
  
  console.log(data);
  return (
    <Layout>
      <MainHeader>
        <h2>Personal </h2>
        <button css={{ padding: "8px" }}>Add a new employee</button>
      </MainHeader>
      <div
        css={{
          backgroundColor: "#eeeeee",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        {data.map((employee) => (
         <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#eeeeee",
              padding: "10px",
              borderBottom: "1px solid black",
              marginBottom: "10px",
            }}
          >
            <Link
              to={`/personal/${employee.id}`}
              css={{ textDecoration: "none", color: "#000000", width: "80%" }}
            >
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ItemContainer itemName="ID" itemContent={employee.id} />
                <ItemContainer
                  itemName="NAME"
                  itemContent={`${employee.name} ${employee.last_name}`}
                />
                <ItemContainer
                  itemName="R.U.C/D.N.I"
                  itemContent={employee.doc_id_number}
                />
                <ItemContainer itemName="AREA" itemContent={employee.job_area} />
                <ItemContainer itemName="EMAIL" itemContent={employee.email} />
              </div>
            </Link>
            <div css={{ alignSelf: "center" }}>
              <button css={{ borderStyle: "none" }}>
                <FontAwesomeIcon
                  css={{ fontSize: "20px", marginRight: "8px" }}
                  icon={faEdit}
                />
              </button>
              <button css={{ borderStyle: "none" }}>
                <FontAwesomeIcon css={{ fontSize: "20px" }} icon={faTrashAlt} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export { PersonalList };
