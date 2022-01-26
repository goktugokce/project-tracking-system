import React from 'react';
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Container,
  Row,
  Col 
} from "reactstrap";

const Border = (props) => {
  return (
    <div>
      <Container>
        <Alert color="secondary">
          <Row>
            <Col></Col>

            <Col>
              <h2>
                <Badge>Project Tracking System</Badge>
              </h2>
            </Col>

            <Col></Col>
          </Row>
        </Alert>

        <Row>
          <Col></Col>

          <Col>
            <Breadcrumb>
              <BreadcrumbItem active>
                <h4>{props.type}</h4>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col xs="4">
            <p></p>
          </Col>
          <Col xs="4">
            {props.children}
          </Col>
          <Col xs="5">
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Border;
