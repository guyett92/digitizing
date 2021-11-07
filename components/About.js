import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal dblue">About Us</h3>
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
      </Container>
    </section>
  );
};
export default About;
