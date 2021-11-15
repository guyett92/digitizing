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
        { title: "Poopy Exp", link: "https://www.poopyexperiences.io/" },
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
                href="mailto:tipeake@gmail.com"
                className="text-dark mt-4 mb-2"
              >
                tipeake@gmail.com
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
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Socials</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <li className="list-inline-item">
                      <a href="#">
                        <BsTwitter />
                      </a>
                    </li>
                    <a href="#">
                      <BsGithub />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
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
                {new Date().getFullYear()} © Digitizing Inc. Made with fists of
                💖 by KC.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
