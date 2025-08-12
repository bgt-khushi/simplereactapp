import React from "react";
import { Container } from "react-bootstrap";
import "../Static/Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} My React Gallery. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;