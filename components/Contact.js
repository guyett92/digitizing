import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, Container } from "reactstrap";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <Container>
        <h3 className="font-weight-normal text-dark">Contact</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
              errors.name = "Name Required";
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required";
            }
            if (!values.message) {
              errors.message = `Message Required`;
            }
            return errors;
          }}
        >
          <Form>
            <label htmlFor="name" className="text-muted">
              Name:{" "}
            </label>
            <Input tag={Field} name="name" type="text" component="input" />
            <ErrorMessage
              name="name"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
            <br />
            <label htmlFor="email" className="text-muted">
              Email:{" "}
            </label>
            <Input tag={Field} name="email" type="email" component="input" />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
            <br />
            <label htmlFor="message" className="text-muted">
              Message:{" "}
            </label>
            <Input tag={Field} name="message" component="textarea" />
            <ErrorMessage
              name="message"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
            <br />
            <Button type="submit">Send</Button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
};

export default Contact;
