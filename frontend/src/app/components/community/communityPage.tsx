import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ChatBody from "./ChatBody";

const Page = styled.div`
  background-image: url("/assets/Field.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  ${tw`
 flex
 items-center
 flex-col
 mb-6

`}
`;
const ChatTitle = styled.h1`
  ${tw`
  text-3xl 
  text-white
    `}
`;

const communityPage = () => {
  return (
    <Page>
      <ChatTitle>Welcome to NetFarms Forum</ChatTitle>
      <ChatBody />
    </Page>
  );
};

export default communityPage;
