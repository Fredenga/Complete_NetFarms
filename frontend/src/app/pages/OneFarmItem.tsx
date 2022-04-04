import React from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import NewsLetter from "../components/home/NewsLetter";
import Item from "../components/OneFarmItem/Item";

const OneFarmItem = () => {
  return (
    <div>
      <Navbar />
      <Item />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default OneFarmItem;
