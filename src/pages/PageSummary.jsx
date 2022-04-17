import React from "react";
import { Link } from "react-router-dom";

const PageSummary = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/first"> First Page</Link>
        </li>
        <li>
          <Link to="/second"> Second Page</Link>
        </li>
        <li>
          <Link to="/third"> Third Page</Link>
        </li>
        <li>
          <Link to="/pokemon/6"> Pokemon (add id after the /)</Link>
        </li>
      </ul>
    </>
  );
};

export default PageSummary;
