import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import UserService from "../graphql/services/userService";

const Body = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  ${tw`
       w-full
       bg-gray-100
        flex-col
        md:flex-row
       
    `}
`;
const Img = styled.img`
  z-index: 1;

  flex: 1;
`;
const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${tw`
    `}
`;
const InputBody = styled.div`
  ${tw`
     flex
     flex-col
     mb-2   
    `}
`;
const Label = styled.label`
  ${tw`
        text-xl
        my-3
    `}
  color: #21f321;
`;
const Input = styled.input`
  ${tw`
        md:px-2
        md:py-2

    `}
  border-bottom: 1px solid #52e459;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c5c52c;
  }
`;
const Welcome = styled.h1`
  ${tw`
        text-2xl
        lg:text-4xl
        py-3
    `}
  color: #187c18;
`;
const Button = styled.button`
  background-color: #2e8132;
  color: white;
  ${tw`
       py-1
       px-16
       my-4
    `}
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Body>
      <Form>
        <Welcome>Sign Up</Welcome>
        <InputBody>
          <Label>Email</Label>
          <Input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </InputBody>
        <InputBody>
          <Label>Password</Label>
          <Input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </InputBody>
        <Button
          onClick={async (event) => {
            event.preventDefault();
            const fetchedUser = await UserService.createUser({
              email,
              password,
            });
            console.log(fetchedUser);
          }}
        >
          Sign In
        </Button>{" "}
      </Form>
      <Img
        src="https://images.pexels.com/photos/4210786/pexels-photo-4210786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="background"
      />
    </Body>
  );
};

export default Register;
