/**@jsx jsx*/
import React from "react";
import { Layout } from "./Layout";
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPortrait,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "./StyledComponents";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getEmployeeById } from "../services/api";

function PersonalDetail() {
  const {id} = useParams();  


  function useEmployee (id) {
    return useQuery(["employee", id], getEmployeeById);
  }

  const {isLoading, data, error} = useEmployee(id);

  if (isLoading) return "Loading...";
  
  if (error) return "An error has occurred";

  return (
    <Layout>
      <div
        css={{
          marginBottom: "40px",
          borderBottom: "1px solid #000000",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Personal Detail</h2>
        <Link to="/personal" css={{ textDecoration: "none", color: "#000000" }}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          Back
        </Link>
      </div>
      <div>
          <div css={{ textAlign: "center", marginBottom: "40px" }}>
          <h3 css={{ fontSize: "20px" }}>
            {" "}
            <FontAwesomeIcon
              icon={faPortrait}
              css={{ fontSize: "25px" }}
            />{`${data.name} ${data.last_name}`}
          </h3>
        </div>
        <div
          css={{
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            paddingTop: "15px",
            width: "50%",
            margin: "auto",
            paddingBottom: "15px",
          }}
        >
          <ul css={{ listStyle: "none" }}>
            <ListItem>
              ID: <span css={{ fontWeight: "normal" }}>{data.id}</span>
            </ListItem>
            <ListItem>
              R.U.C/DNI: <span css={{ fontWeight: "normal" }}>{`(${data.type_doc_id}) ${data.doc_id_number}`}</span>
            </ListItem>
            <ListItem>
              Date of Birth:{" "}
              <span css={{ fontWeight: "normal" }}>{data.date_birth}</span>
            </ListItem>
            <ListItem>
              Address:{" "}
              <span css={{ fontWeight: "normal" }}>{data.address}</span>
            </ListItem>
            <ListItem>
              Email:{" "}
              <span css={{ fontWeight: "normal" }}>{data.email}</span>
            </ListItem>
            <ListItem>
              Job Area: <span css={{ fontWeight: "normal" }}>{data.job_area}</span>
            </ListItem>

            <ListItem>
              Job Position:{" "}
              <span css={{ fontWeight: "normal" }}>{data.job_position}</span>
            </ListItem>

            <ListItem>
              Hiring Date:{" "}
              <span css={{ fontWeight: "normal" }}>{data.hiring_date}</span>
            </ListItem>
          </ul>
        </div>
      
        </div>
        
      <div
        css={{
          width: "20%",
          margin: "auto",
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          css={{
            padding: "8px 20px",
            borderRadius: "8px",
            borderStyle: "none",
            fontSize: "18px",
            backgroundColor: "#318fb5",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Edit
        </button>
        <button
          css={{
            padding: "8px 20px",
            borderRadius: "8px",
            borderStyle: "none",
            fontSize: "18px",
            backgroundColor: "#d8345f",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Delete
        </button>
      </div>
    </Layout>
  );
}

export { PersonalDetail };
