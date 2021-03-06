import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Projects",
      child: [
        { title: "Monsters Bash", link: "https://monstersbash.io/" },
        { title: "Meta Champs", link: "https://www.metachamps.xyz/" },
        { title: "Klapes", link: "https://www.klapes.io/" },
      ],
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <a
                href="mailto:info@digitizing.io"
                className="text-dark mt-4 mb-2 footer-link"
              >
                info@digitizing.io
              </a>
              <br />
              {/* <h6 className="text-muted font-weight-normal">+99 1234-5678-9</h6> */}
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link} className="footer-link">
                          {fLink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Socials</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <div className="list-inline-item">
                    <li className="list-inline-item">
                      <a href="#" className="footer-link">
                        <BsTwitter />
                      </a>
                    </li>
                    <a href="#" className="footer-link">
                      <BsGithub />
                    </a>
                  </div>
                  <li className="list-inline-item">
                    <a href="#" className="footer-link">
                      <FaDiscord />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="image-container">
                  <img
                    src="/images/new-logo.png"
                    alt="digitizing logo"
                    width={100}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                {new Date().getFullYear()} ?? Digitizing Inc. Made with fists of
                ???? by KC.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
