import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div>
            <h1 className="text-center">404 Page Not Found</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
