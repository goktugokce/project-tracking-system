import { Component } from "react";
import { Label, Input, FormGroup } from "reactstrap";

export class SimpleRegisterForm extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" placeholder="Enter your name." />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="surname">Surname:</Label>
          <Input type="text" name="surname" placeholder="Enter your surname." />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password."
          />
        </FormGroup>
      </div>
    );
  }
}
