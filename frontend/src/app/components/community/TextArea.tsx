import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { MessageProps } from "./MessageBody";

const TypeContainer = styled.div`
  /* width: 100%; */
  background-color: #4ae850;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding-inline-start: 20px;
  padding-inline-end: 10px;
  padding-block: 4px;
  margin-top: 20px;
`;
const Input = styled.input`
  background-color: inherit;
  outline: none;
  width: 98%;

  &::placeholder {
    color: #edf4ff;
  }
`;
const SendButton = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const TextArea: React.FC<MessageProps> = ({ SetText, handleSendMessage }) => {
  return (
    <TypeContainer>
      <Input
        placeholder="Type something..."
        onChange={(event) => SetText(event.target.value)}
        type="text"
      />
      <SendButton>
        <FontAwesomeIcon icon={faForward} onClick={handleSendMessage} />
      </SendButton>
    </TypeContainer>
  );
};

export default TextArea;
