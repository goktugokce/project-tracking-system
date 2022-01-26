import React,{useState} from "react";
import Border from '../Border/Border';
import {
  Button,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

const LoginForm = () => {
  const [userType, setUserType] = useState("student");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const selectHandler = (event) => {
    setUserType(event.target.value);
  };
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userSurnameHandler = (event) => {
    setUserSurname(event.target.value);
  };
  const userEmailHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const userPasswordHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
        userType: userType,
        name: userName,
        surname: userSurname,
        email: userEmail,
        password: userPassword,
    }

    console.log(user);
    setUserName('');
    setUserSurname('');
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Border type='Login'>
    <form onSubmit={submitHandler}>
    <FormGroup>
    <Label htmlFor="userType">Select User Type:</Label>
      <Input
        type="select"
        name="select"
        id="userType"
        onChange={selectHandler}
        >
          <option value='lecturer'>Lecturer</option>
          <option selected value='student'>Student</option>
      </Input>
    </FormGroup>

      <Label htmlFor="name">Name:</Label>
      <Input
        onChange={userNameHandler}
        type="text"
        name="name"
        placeholder="Enter your name."
        value={userName}
      />

      <Label htmlFor="surname">Surname:</Label>
      <Input
        onChange={userSurnameHandler}
        type="text"
        name="surname"
        placeholder="Enter your surname."
        value={userSurname}
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        onChange={userEmailHandler}
        type="email"
        name="email"
        placeholder="Enter your email address."
        value={userEmail}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        onChange={userPasswordHandler}
        type="password"
        name="password"
        placeholder="Enter your password."
        value={userPassword}
      />
      <Button type="submit" color='danger'>Login</Button>
      <Button type="submit" color='danger'>Create Account</Button>
    </form>
    </Border>
  );
};

export default LoginForm;
