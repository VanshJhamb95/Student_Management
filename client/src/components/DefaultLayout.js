import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../Red Simple Cute Online Book Club Logo.png";

function DefaultLayout(props) {
  const { employee } = useSelector((state) => state.employee);
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
      <a href="/">
        <img width="100px" src={logo} />
        </a>
        <div className="d-flex align-items-center gap-4">
          <h1
            className="text-white text-small cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            {employee?.name && employee.name.toUpperCase()}
          </h1>
          <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            LOGOUT
          </h1>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}



export default DefaultLayout;
