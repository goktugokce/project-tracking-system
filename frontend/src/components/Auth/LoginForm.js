import React, { Component } from "react";
import { Label, Input, FormGroup } from "reactstrap";

export class LoginForm extends Component {
  render() {
    return (
      <div>
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
