import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/Hero.module.css";
import Zoom from "react-reveal";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={6} className="about-border">
            <Zoom>
              <div className="title mb-5 pt-4">
                <h3 className="nunito-bold text-uppercase text-dark">
                  About Us
                </h3>
                <p className="text-dark">
                  Digitizing Inc is a full-service blockchain development team
                  with offices in New York. Founded in 2021 by longtime crypto
                  enthusiasts, traders and nft collectors, the company is a
                  creative collaboration between experienced developers and
                  longtime friends. Their mission is to further the artistic and
                  innovative endeavors the blockchain has inspired by providing
                  technology solutions to all those with a vision.
                </p>
              </div>
            </Zoom>
          </Col>
          <Col className="contact-border">
            <Zoom>
              <div className="pt-4 pb-3">
                <h3 className="nunito-bold text-uppercase text-dark">
                  Contact
                </h3>
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
                    const emailRegex =
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
                    <label htmlFor="name" className="text-dark">
                      Name:{" "}
                    </label>
                    <Input
                      tag={Field}
                      name="name"
                      type="text"
                      component="input"
                    />
                    <ErrorMessage
                      name="name"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                    <br />
                    <label htmlFor="email" className="text-dark">
                      Email:{" "}
                    </label>
                    <Input
                      tag={Field}
                      name="email"
                      type="email"
                      component="input"
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                    <br />
                    <label htmlFor="message" className="text-dark">
                      Message:{" "}
                    </label>
                    <Input tag={Field} name="message" component="textarea" />
                    <ErrorMessage
                      name="message"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                    <br />
                    <Button
                      className={`btn text-light fw-bold ${styles.gradientBtn}`}
                      type="submit"
                    >
                      Send
                    </Button>
                  </Form>
                </Formik>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
