import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class FormikFormComponent extends Component {
    render() {
        return (
            <div>
                <h1>Simple Formik Form Example to reduce boiler code</h1>
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
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label>Enter the Name : </label>
                                <Field type="name" name="name" />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div>
                                <label>Enter the email : </label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <label>Enter the password : </label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
          </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default FormikFormComponent
