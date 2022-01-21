import React, { Component } from "react";
import {
  Alert,
  Button,
  Label,
  Input,
  FormGroup,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import "../../App.css";
import { LoginForm } from "./LoginForm";

class Login extends Component {
  state = {
    userType: "",
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserType = this.handleUserType.bind(this);
  }

  handleUserType = (e) => {
    this.setState({
      ...this.state,
      userType: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {};
    for (let i = 0; i < form.elements.length; i++) {
      const elem = form.elements[i];

      if (elem.name === "select") data["userType"] = elem.value;
      else data[elem.name] = elem.value;
    }

    console.log(form, data);
    //window.location.href = "/";
  };

  render() {
    const selectedForm = <LoginForm/>

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
                  <h4>Login</h4>
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
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label htmlFor="userType">Select User Type:</Label>
                  <Input
                    type="select"
                    name="select"
                    id="userType"
                    onChange={this.handleUserType}
                  >
                    <option>lecturer</option>
                    <option>student</option>
                  </Input>
                </FormGroup>

                {selectedForm}
                <div className="button">
                <Button  type="button" href="./login" color="danger">
                  Login
                </Button>
                <Button
                  type="submit"
                  color="danger"
                >
                  Create Account
                </Button>
                </div>
              </form>
            </Col>
            <Col xs="5">
              <p></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
