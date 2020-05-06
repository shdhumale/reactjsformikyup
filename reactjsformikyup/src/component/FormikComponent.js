import React, { Component } from 'react'
import { Formik } from 'formik';

class FormikComponent extends Component {
    render() {
        return (
            <div>
                <h1>Simple Formik Example</h1>
                <Formik
                    //use to define initial values assignd to the items tag with name 
                    initialValues={{ name: '', email: '', password: '' }}
                    //validate is a function that take values as input and define error object and fill it when error occurs and return the same.
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (!values.password) {
                            errors.email = 'Required';
                        }
                        return errors;
                    }}
                    //onSubmit is the functions that take values as in put and generally used to make REST call.
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        //values object contains the real value of form field
                        values,
                        //erros defined the errors object
                        errors,
                        //defined if the field is touched or dirty
                        touched,
                        //use to defind handlechange event
                        handleChange,
                        //use to defind handleBlur event
                        handleBlur,
                        //use to defind handleSubmit event
                        handleSubmit,
                        //defined the boolean true id the submit is pressed
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <label>Enter the Name : </label>
                                <input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <br></br>
                                <div>{errors.name && touched.name && errors.name}</div>

                                <label>Enter the email : </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <br></br>
                                <div>{errors.email && touched.email && errors.email}</div>
                                <label>Enter the password : </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <div>{errors.password && touched.password && errors.password}</div>

                                <br></br>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
          </button>
                            </form>
                        )}
                </Formik>
            </div>
        )
    }
}

export default FormikComponent
