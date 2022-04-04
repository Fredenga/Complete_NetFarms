import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { RedIcon } from "../global/Navbar";
import MessageBody from "./MessageBody";
import { useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { removeChats, storeChats } from "../../redux/chatSlice";
import { RootState } from "../../store";

const url = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : "";
const socket = io(url, {
  transports: ["websocket"],
});

const Chatpage = styled.div`
  ${tw`
mt-2
w-full
`}
`;
const TopSection = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    `}
`;
const Account = styled.div`
  ${tw`
    flex
    mb-2
`}
`;
const Name = styled.h2`
  ${tw`
text-white
`}
`;

const ChatBody = () => {
  const [text, SetText] = useState("");
  const email: string = useSelector(
    (state: RootState) => state.user.user.email
  );
  const dispatch = useDispatch();
  const handleSendMessage = (event: any): void => {
    // event.preventDefault();
    if (email !== "") {
      text &&
        socket.emit("message", {
          data: { text, email },
        });
    } else {
      window.alert("You are not logged in");
      return;
    }
  };

  socket.on("message", (messages) => {
    messages && dispatch(storeChats(messages));
    // dispatch(removeChats(messages));
  });
  const MessageProps = {
    SetText,
    handleSendMessage,
  };
  return (
    <Chatpage>
      <TopSection>
        <Account>
          <RedIcon>
            <FontAwesomeIcon icon={faUser} />
          </RedIcon>
          <Name>{email}</Name>
        </Account>
      </TopSection>
      <MessageBody {...MessageProps} />
    </Chatpage>
  );
};

export default ChatBody;
