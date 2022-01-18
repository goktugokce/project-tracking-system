import React, { Component } from "react";
import { Label, Input, FormGroup } from "reactstrap";
import { SimpleRegisterForm } from "./SimpleRegisterForm";

export class StudentRegisterForm extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Label htmlFor="studentNumber">Student Number:</Label>
          <Input
            type="text"
            name="studentNumber"
            placeholder="Enter your student number."
          />
        </FormGroup>

        <SimpleRegisterForm />
      </div>
    );
  }
}
