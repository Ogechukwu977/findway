import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./styles.css";

export const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        paddingLeft: "120px",
        paddingRight: "120px",
        backgroundColor: "#FED4E3",
        position: "fixed",
        width: "100%",
      }}
    >
      <Navbar.Brand
        href="#home"
        style={{
          fontFamily: "climate crisis",
          marginRight: "599px",
          color: "#0D1B2A",
        }}
      >
        Findway
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contactus" style={{ marginRight: "32px" }}>
            Contact Us
          </Nav.Link>
          <Button
            variant="outline-primary"
            className="signup-button"
            style={{
              borderRadius: "48px",
              borderColor: "#0D1B2A",
              color: "#0D1B2A",
            }}
          >
            Sign Up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
              style={{ marginLeft: "8px" }}
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V3.707L3.854 13.854a.5.5 0 1 1-.708-.708L12.293 3H3.5a.5.5 0 0 1 0-1h10z"
              />
            </svg>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
