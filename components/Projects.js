import React from "react";
import { Container, Row, Col, List } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <h6 className="text-dark font-weight-normal mb-3 pt-3">
                  Development Highlights
                </h6>
                <List>
                  {feature.highlights.map((highlight, key) => (
                    <li className="text-muted" key={key}>
                      {highlight}
                    </li>
                  ))}
                </List>
                <a href={feature.link} className="f-16 text-warning">
                  Learn More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <h6 className="text-dark font-weight-normal mb-3 pt-3">
                  Development Highlights
                </h6>
                <List>
                  {feature.highlights.map((highlight, key) => (
                    <li className="text-muted" key={key}>
                      {highlight}
                    </li>
                  ))}
                </List>
                <a href={feature.link} className="f-16 text-warning">
                  Learn More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Projects = () => {
  const features = [
    {
      id: 1,
      img: "./images/45.png",
      title: "Monsters Bash",
      desc: "A generative art collection featuring 10,000 unique combinations of the world’s favorite classic monsters. Each hand drawn asset animates as it transitions between its human and monster identities.",
      highlights: [
        "Programmatic generation allowing for over a quintillion combinations of traits",
        "Blockchain smart contract development",
      ],
      link: "https://monstersbash.io/",
    },
    {
      id: 2,
      img: "./images/Group Members.png",
      title: "Meta Champs",
      desc: "A collectible sports club offering a 3D and fully interactive NFT as it’s initial membership ticket. Each jersey awards the owner with special access to future drops, SWAG and perks.",
      highlights: [
        "AR/VR ready GLB file coded to be interactively spun 360 degrees by the viewer",
        "More blockchain contract development",
      ],
      link: "https://www.metachamps.xyz/",
    },
    {
      id: 3,
      img: "./images/45.png",
      title: "Poopy Exp",
      desc: "The first programmatically generated interactive ERC-721 NFT. Each poopy contains an arcade style game within the NFT who’s attributes (like difficulty rating and map layout) are uniquely generated when minted.",
      highlights: [
        "Programmatic generation",
        "Interactive reveal allowing user to uncover their design for the first time - a first for NFT collections",
        "One of a kind generated arcade style game contained within the NFT",
        "Even more blockchain smart contract development",
      ],
      link: "https://www.poopyexperiences.io/",
    },
  ];
  return (
    <section className="section" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Projects</span>
              </h3>
              <p className="text-muted">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Projects;
