/* eslint-disable react/prop-types */
// import React from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

const BreadCrumbsComp = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      role="presentation"
      style={{ padding: "10px 0" }}
      onClick={(e) => e.preventDefault()}
    >
      <Breadcrumbs aria-label="breadcrumb">
        {data.map((item, i) => (
          <MUILink
            key={i + "d"}
            // component="button"
            underline={item.underline}
            color={item.color}
            href={item.href}
            // current={item.current}
            onClick={() => navigate(item.href)}
          >
            {item.title}
          </MUILink>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumbsComp;
