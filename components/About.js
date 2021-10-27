import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                About <span className="text-info">Us</span>
              </h3>
              <p className="text-muted">
                Digitizing Inc is a full-service blockchain development team
                with offices in New York. Founded in 2021 by longtime crypto
                enthusiasts, traders and nft collectors, the company is a
                creative collaboration between experienced developers and
                longtime friends. Their mission is to further the artistic and
                innovative endeavors the blockchain has inspired by providing
                technology solutions to all those with a vision.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              Lorem Ipsum has been the industry's standard dummy text
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Mission
                </h6>
                <p className="text-muted font-weight-light">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Vision
                </h6>
                <p className="text-muted font-weight-light">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
