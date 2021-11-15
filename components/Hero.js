import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={`special-section position-relative ${styles.hero}`}>
      <Container>
        <Row className={`align-items-center ${styles.bottomClass}`}>
          <Col lg={8} className="align-self-end">
            <div className="pr-lg-5 new-card">
              <h1 className="mb-4 font-weight-normal text-dark line-height-1_4">
                digitizing.io
              </h1>
              <p className="text-dark fw-bold mb-4 pb-2">
                Technology solutions that allow creatives, artists,
                entrepreneurs, and businesses to achieve their vision on the
                blockchain.
              </p>
              {/* <div>
                <h3 className={styles.socials}>
                  <BsTwitter />
                </h3>
                <h3 className={styles.socials}>
                  <BsGithub />
                </h3>
                <h3 className={styles.socials}>
                  <FaDiscord />
                </h3>
              </div> */}
              <a
                href="#contact"
                className={`btn text-light fw-bold ${styles.gradientBtn}`}
              >
                Contact Now <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
