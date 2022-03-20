import React from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import * as yup from "yup";
import Error from "./file";
import Preview from "./preview";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const validationSchema = yup.object({
  name: yup.string().required("Name is Required!"),
  phone: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not Valid Phone Number!")
    .required("Phone is Required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
  gender: yup.string().required("Gender is Required!"),
  date: yup.date().required("Date of Birth is required"),
  adress: yup
    .string()
    .min(5, "too small!")
    .max(500, "Too Long String")
    .required(" Adress is Required"),

  file: yup
    .mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Uplaod file is to big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uplaod file has unsupported format.",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
const Newfile = () => {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          password: "",
          gender: "",
          date: "",
          adress: "",
          file: null,
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="container bg-info border border-blue w-50 p-3 mt-3 ">
            <div className="" align="center">
              <h1 className="mb-2 text-white ">Todos Form</h1>

              <div>

              <Field
                name="name"
                type="text"
                placeholder="Firstname"
                className="form-control mt-4"
              />
              <Error name="name" />
              </div>

              <Field
                name="phone"
                type="number"
                placeholder="Phone No"
                className="form-control"
              />
              <Error name="phone" />

              <Field
                name="adress"
                as="textarea"
                placeholder="Address"
                className="form-control"
              />
              <Error name="adress" />

              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <Error name="password" />
              <div align="left">
                <label className="fw-bold">Gender:</label>
                <br></br>
                <label>Male:</label>
                <Field
                  name="gender"
                  className="m-3"
                  value="male"
                  type="radio"
                />
                <label>Female:</label>
                <Field
                  name="gender"
                  className="m-3"
                  value="female"
                  type="radio"
                />
                <label>Other:</label>
                <Field
                  name="gender"
                  className="m-3"
                  value="other"
                  type="radio"
                />
                <Error name="gender" />
              </div>
              <div align="left">
                <label className="fw-bold">DOB:</label>
                <Field className="ms-3" name="date" type="date" />
                <Error name="date" />
              </div>
              <div className="d-flex" align="left">
                <label className="fw-bold ">Add Image:</label>
                <input
                  type="file"
                  className="ms-3"
                  onChange={(e) => {
                    setFieldValue("file", e.target.files[0]);
                  }}
                />
                {values.file && <Preview file={values.file} />}
                <Error name="file" />
              </div>
              <button className="mt-4 btn btn-success  " type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Newfile;
