import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src="/images/new-logo.png" width={70} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink
                  className="text-dark new-hover"
                  onClick={toggle}
                  href="#projects"
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-dark new-hover"
                  onClick={toggle}
                  href="#about"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-dark new-hover"
                  onClick={toggle}
                  href="#about"
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
