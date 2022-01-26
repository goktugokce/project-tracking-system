import React, {useState} from 'react';
import Border from '../Border/Border';
import {
  Button,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

const RegisterForm = () => {

  const [userType, setUserType] = useState('student');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  
  const selectHandler = (event) => {
    setUserType(event.target.value);
  }
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }
  const userSurnameHandler = (event) => {
    setUserSurname(event.target.value);
  }
  const userEmailHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const userPasswordHandler = (event) => {
    setUserPassword(event.target.value);
  }
  const studentNumberHandler = (event) => {
    setStudentNumber(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let user = {};
    if(userType === 'student'){
      user = {
        userType:userType,
        studentNumber:studentNumber,
        name:userName,
        surname:userSurname,
        email:userEmail,
        password:userPassword,
      }
      setStudentNumber('');
    }
    else{
        user = {
          userType:userType,
          name:userName,
          surname:userSurname,
          email:userEmail,
          password:userPassword,
      }
    }
    setUserName('');
    setUserSurname('');
    setUserEmail('');
    setUserPassword('');
    console.log(user);
  }

  return <Border type='Register'> 
    <form onSubmit={submitHandler}>
    <FormGroup>
    <Label htmlFor="userType">Select User Type:</Label>
      <Input
        type="select"
        name="select"
        id="userType"
        onChange={selectHandler}
        >
          <option selected value='student'>Student</option>
          <option value='lecturer'>Lecturer</option>
      </Input>
    </FormGroup>

    {userType === 'student' && 
    (<div>
      <Label htmlFor="studentNumber">Student Number:</Label>
      <Input
        onChange={studentNumberHandler}
        type="text"
        name="studentNumber"
        placeholder="Enter your student number."
        value={studentNumber}
      />
      </div>)}

    <Label htmlFor="name">Name:</Label>
    <Input value={userName} onChange={userNameHandler} type="text" name="name" placeholder="Enter your name." />

    <Label htmlFor="surname">Surname:</Label>
    <Input value={userSurname} onChange={userSurnameHandler} type="text" name="surname" placeholder="Enter your surname." />

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
    <Button type='submit' color='danger'>Register</Button>
    <Button type='submit' color='danger'>Already Signed In?</Button>
          
  </form>
  </Border>;
};

export default RegisterForm;
