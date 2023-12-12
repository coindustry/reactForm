import React from "react";
import { useFormik } from 'formik';

function App() {
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Field required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Username should be an email';
    }

    if (!values.password) {
      errors.password = 'Field required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        </div>

        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;