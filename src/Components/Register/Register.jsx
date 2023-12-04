import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true)
    let { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );
    if (data.message === "success") {
      setIsLoading(false)
      navigate("/login");
    }
    console.log(data);
    console.log(values);
  };

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "name length less than 3")
      .max(10, "name length more than 10"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(4, "Password should be of minimum 8 characters length")
      .max(10, "Password should be of maximum 10 characters length")
      .matches(/[0-9]/, "password is not valid")
      .matches(/[A-Z]/, "password must contain at least 1 upercase char")
      .matches(/[a-z]/, "password must contain at least 1 lowercase char")
      .matches(/[!@#$%^&*()\-_=+{};:,<.>]/, "password must contain at least 1 special char"),
    rePassword: Yup.string()
      .required("repassword is required")
      .oneOf([Yup.ref("password")], "password is not match"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "phone is not valid"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    isInitialValid: false,
  });
  // console.log(formik.isValid);

  return (
    <>
      <div className="w-57 mx-auto py-4">
        <h3>Register Now</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            className="form-control mb-1"
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email : </label>
          <input
            className="form-control mb-1"
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">password :</label>
          <input
            className="form-control mb-1"
            type="password"
            name="password"
            id="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}

          <label htmlFor="repassword">repassword :</label>
          <input
            className="form-control mb-1"
            type="Password"
            name="rePassword"
            id="rePassword"
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            onChange={formik.handleChange}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : null}

          <label htmlFor="phone">Phone :</label>
          <input
            className="form-control mb-1"
            type="tel"
            name="phone"
            id="phone"
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : null}
          {isLoading && (<button className="btn btn-info">
            <i className="fas fa-spinner fa-spin"></i>
          </button>)}

          <button
            disabled={!formik.isValid}
            className="btn btn-info"
            type="submit"
          >
            submit
          </button>

        </form>
      </div>
    </>
  );
};

export default Register;
