import {useFormik} from "formik";
import React from "react";
import * as Yup from "yup";
import Imagepost from "./imagepost";
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "*Must be 15 character or less")
        .required("*Required"),
      lastName: Yup.string()
        .max(15, "*Must be 15 character or less")
        .required("*Required"),
      adress: Yup.string()
        .max(20, "*Must be 20 character or number")
        .required("*Required"),
      email: Yup.string().email("*invalid email address").required("*Required"),
      password: Yup.string()
        .max(20, "*Must be character string and number")
        .required("*Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, 2, null));
    },
  });
  return (
    <div className="container w-50 p-3 nt-1 mt-5 d-flex justify-content-center   border border- dark danger bg-info">
      <form
        className="row g-2 form-control-sm p-1"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="Sign up " className="fs-4 text-warning text-white">
          SIGN UP
        </label>
        <div className="w-100 p-2 ">
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="form-control mt-2"
              type="text"
              placeholder="firstName"
              name="firstName"
              id="firstName"
              aria-label="form-control-lg example"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="form-control mt-2"
              type="text"
              placeholder="lastName"
              name="lastName"
              id="lastName"
              aria-label="form-control-lg example"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              id="email"
              name="email"
              className="form-control mt-2"
              type="text"
              placeholder="email"
              aria-label="default input example"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adress}
              id="adress"
              name="adress"
              className="form-control mt-2"
              type="text"
              placeholder="adress"
              aria-label="default input example"
            />
            {formik.touched.adress && formik.errors.adress ? (
              <div className="text-danger">{formik.errors.adress}</div>
            ) : null}
          </div>
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              value={formik.values.password}
              id="password"
              name="password"
              className="form-control mt-2 mb-2"
              type="text"
              placeholder="password"
              aria-label=".form-control-sm example"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
        <div className="form-control mt-2 mb-2">
          <Imagepost image={formik.avatar}/>



        </div>
          <button type="submit" className="  btn btn-secondary btn-lg  ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
