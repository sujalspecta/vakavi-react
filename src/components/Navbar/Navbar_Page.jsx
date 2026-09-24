import React, {  useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

//Import Stickey Header
import StickyHeader from "react-sticky-header";
import "../../../node_modules/react-sticky-header/styles.css";

import ScrollspyNav from "./scrollSpy";

//Import Images
import logo from "../../assets/images/logo.png";

const NavbarPage = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
  
    const toggle = () => {
      setIsOpenMenu(!isOpenMenu);
    };
  
    // Store all Navigationbar Id into TargetID variable (Used for Scrollspy)
    const targetId = props.navitems.map((item) => {
      return item.idnm;
    });
  
    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
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
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
  };

export default NavbarPage;
