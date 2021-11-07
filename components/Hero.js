import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="special-section about-section position-relative hero">
      <div className="special">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="align-self-end">
              <div className="pr-lg-5 new-card">
                <p className="text-uppercase dblue font-weight-medium f-14 mb-4">
                  DIGITAL REVOLUTION
                </p>
                <h1 className="mb-4 font-weight-normal dblue line-height-1_4">
                  DIGITIZING INC
                </h1>
                <p className="text-dark mb-4 pb-2">
                  Technology solutions that allow creatives, artists and
                  businesses to achieve their vision on the blockchain.
                </p>
                <a href="#contact" className="btn btn-info">
                  Contact Now <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
