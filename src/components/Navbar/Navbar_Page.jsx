import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

// Import Images
import logo from "../../assets/images/logo.png";

const NavbarPage = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
  
    const toggle = () => {
      setIsOpenMenu(!isOpenMenu);
    };
  
    // Tracks page scrolling to match old plugin offsets
    useEffect(() => {
      const handleScroll = () => {
        // Triggers sticky state when scrolling down past the header height
        if (window.scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const targetId = props.navitems.map((item) => {
      return item.idnm;
    });
  
    return (
      <React.Fragment>
        {/* STRUCTURAL WRAPPER: Simulates the old library layout so CSS styles do not break */}
        <div className={`sticky-header-wrapper ${isSticky ? "is-sticky" : ""}`}>
          <div className="sticky-header-root">
            <header 
              className={`fixed-top ${isSticky ? "nav-sticky" : ""}`}
              style={{ 
                transition: "all 0.4s ease-in-out", 
                zIndex: 1030,
                width: "100%"
              }}
            >
              {/* Added native bootstrap classes for background and custom layout spacing */}
              <Nav className="navbar navbar-expand-lg navbar-custom sticky navbar-light">
                <Container>
                  <NavbarBrand className="logo text-uppercase" href="/">
                    <img src={logo} alt="logo" height="24" />
                  </NavbarBrand>
                  <NavbarToggler onClick={toggle}>
                    <i className="ti-menu"></i>
                  </NavbarToggler>
    
                  <Collapse id="data-scroll" isOpen={isOpenMenu} navbar>
                    <ScrollspyNav
                      scrollTargetIds={targetId}
                      scrollDuration="300"
                      headerBackground="true"
                      activeNavClass="active"
                      className="navbar-collapse"
                    >
                      <Nav navbar className="ms-auto navbar-center" id="mySidenav">
                        {props.navitems.map((item, key) => (
                          <NavItem key={key}>
                            <NavLink
                              href={`#${item.idnm}`}
                              className={item.navheading === 'Home' ? 'active' : ''}
                            >
                              {' '}
                              {item.navheading}
                            </NavLink>
                          </NavItem>
                        ))}
                      </Nav>
                    </ScrollspyNav>
                  </Collapse>
                </Container>
              </Nav>
            </header>
          </div>
        </div>
      </React.Fragment>
    );
  };

export default NavbarPage;
