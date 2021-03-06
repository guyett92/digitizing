import React, { useEffect, useState } from "react";
import { Container, Row, Col, List } from "reactstrap";
import Zoom from "react-reveal";

const FeatureBox = (props) => {
  const [reorder, setReorder] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setReorder(true);
    } else {
      setReorder(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Zoom left key={key}>
            <Row
              className={`${
                feature.id === 1
                  ? "align-items-center"
                  : "align-items-center mt-5"
              }`}
            >
              <Col md={5}>
                <div>
                  <a href={feature.link} target="_blank" rel="noreferrer">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="img-fluid shadow rounded d-block mx-auto"
                      width={393}
                    />
                  </a>
                </div>
              </Col>
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="purp nunito-bold mb-3 pt-3">
                    {feature.title}
                  </h5>
                  <p className="text-dark mb-3 f-15">{feature.desc}</p>
                  <h6 className="lblue nunito-bold mb-3 pt-3">
                    Development Highlights
                  </h6>
                  <List>
                    {feature.highlights.map((highlight, key) => (
                      <li className="text-dark" key={key}>
                        {highlight}
                      </li>
                    ))}
                  </List>
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noreferrer"
                    className="f-16 lblue dblue-hover nunito-bold"
                  >
                    Learn More <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Zoom>
        ) : !reorder ? (
          <Zoom right key={key}>
            <Row className="align-items-center mt-5">
              <Col md={6}>
                <div className="mb-4">
                  <div className="my-4">
                    <i className="mdi mdi-account-group"></i>
                  </div>
                  <h5 className="purp nunito-bold mb-3 pt-3">
                    {feature.title}
                  </h5>
                  <p className="text-dark mb-3 f-15">{feature.desc}</p>
                  <h6 className="lblue nunito-bold mb-3 pt-3">
                    Development Highlights
                  </h6>
                  <List>
                    {feature.highlights.map((highlight, key) => (
                      <li className="text-dark" key={key}>
                        {highlight}
                      </li>
                    ))}
                  </List>
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noreferrer"
                    className="f-16 lblue dblue-hover nunito-bold"
                  >
                    Learn More <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                <div>
                  <a href={feature.link} target="_blank" rel="noreferrer">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="img-fluid d-block mx-auto rounded shadow"
                      width={393}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Zoom>
        ) : (
          <Zoom right key={key}>
            <Row
              className={`${
                feature.id === 1
                  ? "align-items-center"
                  : "align-items-center mt-5"
              }`}
            >
              <Col md={5}>
                <div>
                  <a href={feature.link} target="_blank" rel="noreferrer">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="img-fluid shadow rounded d-block mx-auto"
                      width={393}
                    />
                  </a>
                </div>
              </Col>
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="purp nunito-bold mb-3 pt-3">
                    {feature.title}
                  </h5>
                  <p className="text-dark mb-3 f-15">{feature.desc}</p>
                  <h6 className="lblue  nunito-bold mb-3 pt-3">
                    Development Highlights
                  </h6>
                  <List>
                    {feature.highlights.map((highlight, key) => (
                      <li className="text-dark" key={key}>
                        {highlight}
                      </li>
                    ))}
                  </List>
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noreferrer"
                    className="f-16 lblue dblue-hover nunito-bold"
                  >
                    Learn More <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Zoom>
        )
      )}
    </>
  );
};
const Projects = () => {
  const features = [
    {
      id: 1,
      img: "./images/monsters.jpg",
      title: "Monsters Bash",
      desc: "A generative art collection featuring 10,000 unique combinations of the world???s favorite classic monsters. Each hand drawn asset animates as it transitions between its human and monster identities.",
      highlights: [
        "Programmatic generation allowing for over a quintillion combinations of traits",
        "Blockchain smart contract development",
      ],
      link: "https://monstersbash.io/",
    },
    {
      id: 2,
      img: "./images/metachamps.jpg",
      title: "Meta Champs",
      desc: "A collectible sports club offering a 3D and fully interactive NFT as it???s initial membership ticket. Each jersey awards the owner with special access to future drops, SWAG and perks.",
      highlights: [
        "AR/VR ready GLB file coded to be interactively spun 360 degrees by the viewer",
        "More blockchain contract development",
      ],
      link: "https://www.metachamps.xyz/",
    },
    {
      id: 3,
      img: "./images/Basic Klape Photo.png",
      title: "Klapes",
      desc: "Klapes is a project of 5,000 programatically generated NFTs. The first NFT built and released on the Klaytn blockchain.",
      highlights: [
        "Klaytn blockchain smart contract development",
        "Programmatic generation of each unique image",
      ],
      link: "https://www.klapes.io/",
    },
  ];
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="title text-left mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-dark nunito-bold text-uppercase">
                  Projects
                </span>
              </h3>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
        <div id="about"></div>
      </Container>
    </section>
  );
};
export default Projects;
