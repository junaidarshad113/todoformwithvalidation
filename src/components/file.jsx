import React from "react";
import { ErrorMessage } from "formik";

const Error = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <br />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Error;