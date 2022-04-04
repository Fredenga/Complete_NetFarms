import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NewsContainer = styled.div`
  background-color: white;
  opacity: 0.8;
  ${tw`
  lg:px-8
  lg:pt-3
  flex
  flex-col
  items-center
  justify-center
  mt-2
  `}
`;
const Title = styled.h1`
  color: #00ff00;
  text-shadow: #4cc54c;
  ${tw`
    text-2xl
    lg:text-3xl
    text-center
    mt-4 
    lg:mt-1
  `}
`;
const InputContainer = styled.form`
  ${tw`
    flex
    w-full
    md:w-3/4
    p-3
    lg:w-1/2
    my-3
    rounded
  `}
`;
const InputText = styled.input`
  width: 90%;
  border: 1px #07fc07 solid;

  ${tw`
    px-2
    py-2
    outline-none
  
  `}
  &::placeholder {
    color: grey;
  }
`;
const InputButton = styled.button`
  background-color: #57fa57;
  color: white;
  ${tw`
    p-1
    flex
    items-center
    justify-center
    cursor-pointer
  `}
`;

const NewsLetter = () => {
  return (
    <NewsContainer>
      <Title>Sign Up For Our Weekly Newsletter</Title>
      <InputContainer>
        <InputText
          type="text"
          placeholder="Provide your email address here..."
        />
        <InputButton type="submit">send</InputButton>
      </InputContainer>
    </NewsContainer>
  );
};

export default NewsLetter;
