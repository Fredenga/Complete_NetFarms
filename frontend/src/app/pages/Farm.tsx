import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import FarmItems from "../components/farm/FarmItems";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import NewsLetter from "../components/home/NewsLetter";
import ItemService from "../graphql/services/itemService";
import { storeItems, resetItems } from "../redux/itemSlice";

const FarmContainer = styled.div`
  ${tw``}
`;

const Farm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const GetItems = async () => {
      const data = await ItemService.getAllItems();
      data && dispatch(storeItems(data.getAllItems));
      // dispatch(resetItems(data));
    };
    GetItems();
  }, [dispatch]);
  return (
    <FarmContainer>
      <Navbar />
      <FarmItems />
      <NewsLetter />
      <Footer />
    </FarmContainer>
  );
};

export default Farm;
