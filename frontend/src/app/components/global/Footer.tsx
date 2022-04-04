import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  background-image: url("/assets/lightgreen.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  ${tw`
        min-w-full       
        pt-10
        md:pt-16
        pb-1 
        flex
        flex-col
        min-w-full
        items-center
        justify-center
        `}
`;
const InnerContainer = styled.div`
  ${tw`
        max-w-screen-2xl
        flex
        flex-wrap
        min-w-full
        h-full
        justify-center
    `}
`;
const AboutContainer = styled.div`
  ${tw`
  
  flex
  flex-col
  mr-3
  pl-10 
  pr-10 
  md:pl-3 
  md:pr-3 
`}
`;
const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-6 
        
    `}
`;
const SectionContainer = styled.div`
  ${tw`
    w-full
    sm:w-auto
    flex
    flex-col
    pl-10
    pr-10
    md:pl-3
    md:pr-3      
    mr-3
    ml-2 
    md:ml-16
    md:mr-16
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;
const ListItem = styled.li`
  ${tw`        
        mb-3
    `}
  & > a {
    ${tw`
        text-xs
        text-white   
        hover:text-gray-200 
        transition-all    
    `}
  }
`;
const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3 
    `}
`;
const RedIcon = styled.span`
  ${tw`
    w-8
    h-8 
    rounded-full
    flex
    items-center
    justify-center
    text-base
    mr-1
    text-white
  `}
`;
const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;
const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;
const BottomContainer = styled.div`
  ${tw`
    flex
    w-full
    
    
  `}
`;
const CopyRightText = styled.small`
  font-size: 12px;

  ${tw`
        text-white
        font-thin
  `}
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            molestias tempora pariatur suscipit ducimus architecto voluptas
            temporibus delectus sapiente nam natus laborum, rem quaerat earum
            consequatur cumque impedit veritatis dignissimos ex reiciendis ab
            quasi cum rerum harum? Consectetur eum eaque odio! Delectus veniam
            et voluptates vitae ab quia quas blanditiis.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="/">Home</a>
            </ListItem>
            <ListItem>
              <a href="/">About Us</a>
            </ListItem>
            <ListItem>
              <a href="/">Services</a>
            </ListItem>
            <ListItem>
              <a href="/">Organizations</a>
            </ListItem>
            <ListItem>
              <a href="/">Forums</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="/">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="/">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="/">Support</a>
            </ListItem>
            <ListItem>
              <a href="/">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="/">Terms and Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+81 245-867-1878</SmallText>
          </HorizontalContainer>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>netfarms@agritech.co.ke</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyRightText>
          Copyright &copy; {new Date().getFullYear()} NetFarms. All rights
          reserved
        </CopyRightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
