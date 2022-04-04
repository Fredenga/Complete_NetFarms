// import { useState } from "react";
// import { io } from "socket.io-client";
// const url = process.env.REACT_APP_BACKEND_URL
//   ? process.env.REACT_APP_BACKEND_URL
//   : "";
// const socket = io(url, {
//   transports: ["websocket"],
// });

import Navbar from "../components/global/Navbar";
import CommunityPage from "../components/community/communityPage";
import NewsLetter from "../components/home/NewsLetter";
import Footer from "../components/global/Footer";
// interface IMessage {
//   _id: string;
//   text: string;
//   email: string;
// }

const Community = () => {
  // const [text, SetText] = useState("");
  // const email: string = "jamanidavid@gmail.com";
  // let messageCache: IMessage[] = [];
  // const msgIds = messageCache.map((message) => {
  //   return message._id;
  // });
  // const handleSendMessage = (event: any): void => {
  //   event.preventDefault();
  //   text && socket.emit("message", { data: { text, email } });
  // };

  // socket.on("message", (messages) => {
  //   if (messages) {
  //     messages.forEach((message: IMessage) => {
  //       if (!msgIds.includes(message._id)) {
  //         messageCache.push(message);
  //       }
  //     });
  //   } else {
  //     console.log("first");
  //   }
  // });
  // messageCache.length > 0 && console.log(messageCache);
  return (
    <div>
      {/* <h1>WebSocket Tester</h1>
      <form>
        <input onChange={(event) => SetText(event.target.value)} type="text" />
        <button onClick={handleSendMessage} type="submit">
          send
        </button>
      </form>
      <p>{message}</p> */}
      <Navbar />
      <CommunityPage />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Community;
