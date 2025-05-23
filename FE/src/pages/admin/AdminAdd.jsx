import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
function AdminAdd() {


  const [data, setdata] = useState([]);
    function getData() {
      fetch("http://localhost:3000/product")
        .then((res) => res.json())
        .then((data) => setdata(data));
    }
    useEffect(() => {
      getData();
    }, []);
  function post(body) {
    fetch("http://localhost:3000/product", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  return (
    <div>
      <title>admin add </title>
      <Formik
        initialValues={{ image: "", name: "", information: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          information: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          post(values)
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="image">image</label>
            <input id="image" type="text" {...formik.getFieldProps("image")} />
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}

            <label htmlFor="name">name</label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="information">information</label>
            <input
              id="information"
              type="text"
              {...formik.getFieldProps("information")}
            />
            {formik.touched.information && formik.errors.information ? (
              <div>{formik.errors.information}</div>
            ) : null}
            <label htmlFor="price">price</label>
            <input id="price" type="text" {...formik.getFieldProps("price")} />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AdminAdd;
