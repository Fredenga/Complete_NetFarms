import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { RootState } from "../../store";
import TextArea from "./TextArea";

export interface MessageProps {
  SetText: any;
  handleSendMessage: any;
}

const MessageContainer = styled.div`
  ${tw`
    bg-white
    w-full
    flex
    items-center
    justify-center
    pb-2
    px-2 
    md:px-0
`}
  opacity: 0.8;
`;

const MessageWrapper = styled.div`
  ${tw`
        flex
        flex-col
    `}
  opacity: 1;
`;

const Message = styled.div`
  ${tw`
    flex
    my-3
    `}
`;
const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Text = styled.div`
  /* float: right; */
  border-radius: 16px;
  background-color: #4ae850;
  max-width: 500px;
  ${tw`
    
    ml-2
    px-3
    `}
`;

const Identity = styled.small`
  display: block;
  ${tw`
    text-white
    text-base
    `}
`;

const MessageBody: React.FC<MessageProps> = (props) => {
  const messages = useSelector((state: RootState) => state.chat.Messages);
  return (
    <MessageContainer>
      <MessageWrapper>
        {messages.map((message) => {
          return (
            <Message>
              <Avatar src="/assets/net.png" alt="avatar" />
              <Text>
                <Identity>{message.email}</Identity>
                {message.text}
              </Text>
            </Message>
          );
        })}
        <TextArea {...props} />
      </MessageWrapper>
    </MessageContainer>
  );
};

export default MessageBody;
