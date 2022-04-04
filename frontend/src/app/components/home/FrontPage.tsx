import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import frontData, { cards } from "./FrontData";
import NewsLetter from "./NewsLetter";

const PageContainer = styled.div`
  background-image: url("/assets/drones.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  ${tw`
`}
`;
const TopContainer = styled.div`
  ${tw`
  pt-2
  lg:pt-5
  md:px-5
  lg:px-24
`}
`;
const Title = styled.h1`
  ${tw`
      lg:text-4xl 
      text-2xl
      text-white
      text-center
      mb-6
  `}
`;
const ItemsContainer = styled.div`
  ${tw``}
`;
const ItemContainer = styled.div`
  ${tw`
    flex
    flex-col
    lg:flex-row
  `}
`;
const ImgContainer = styled.div`
  flex: 1;
  ${tw``}
`;
const Img = styled.img`
  flex: 1;
  ${tw`
  h-full w-full`}
`;
const InfoContainer = styled.div`
  flex: 1;
  background-color: white;
  opacity: 0.8;
  ${tw`
    p-3
  `}
`;
const CardContainer = styled.div`
  ${tw`
  p-2
  bg-white
  `}
  opacity: 0.8;
  overflow-y: hidden;
`;
const CardBody = styled.div`
  ${tw`
  flex
  flex-col
  md:flex-row
  w-full
  lg:h-64
   
  `}
`;
const CardImg = styled.img`
  ${tw`
    h-full
    w-full
  `}
`;

const FrontPage = () => {
  return (
    <PageContainer>
      <TopContainer>
        <Title>Welcome to NetFarms</Title>
        <ItemsContainer>
          {frontData.map((data) => {
            if (data.id % 2 === 1) {
              return (
                <ItemContainer>
                  <ImgContainer>
                    <Img src={data.img} />
                  </ImgContainer>
                  <InfoContainer>{data.text}</InfoContainer>
                </ItemContainer>
              );
            } else {
              return (
                <ItemContainer>
                  <InfoContainer>{data.text}</InfoContainer>
                  <ImgContainer>
                    <Img src={data.img} />
                  </ImgContainer>
                </ItemContainer>
              );
            }
          })}
        </ItemsContainer>
        <CardContainer>
          <CardBody>
            {cards.map((card) => (
              <CardImg key={card.id} src={card.src} alt={card.alt} />
            ))}
          </CardBody>
        </CardContainer>
      </TopContainer>
      <NewsLetter />
    </PageContainer>
  );
};

export default FrontPage;
