import React from "react";
import { Label, Input, FormGroup } from "reactstrap";



const LoginForm = () => {
  return <div>
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
  </div>;
};

export default LoginForm;