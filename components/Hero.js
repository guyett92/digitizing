import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Lorem Ipsum
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                DIGITIZING INC
              </h1>
              <p className="text-muted mb-4 pb-2">
                Technology solutions that allow creatives, artists and
                businesses to achieve their vision on the blockchain.
              </p>
              <a href="#contact" className="btn btn-info">
                Contact Now <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/Group Members.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
