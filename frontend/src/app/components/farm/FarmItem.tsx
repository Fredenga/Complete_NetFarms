import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

interface ItemProps {
  name: string;
  _id: string;
  img: string;
  information: string;
  category: string;
}

const FarmCard = styled.div`
  ${tw`
    h-full
    md:w-64 
    md:h-64 
    lg:w-80
    lg:h-80 
    md:mr-2
    md:mr-5
    cursor-pointer

  `}
`;
const FarmCardImg = styled.img`
  ${tw`
  `}
`;
const FarmCardTitle = styled.h3`
  ${tw`
    
  `}
`;

const FarmItem: React.FC<ItemProps> = ({ img, name, _id }) => {
  const navigate = useNavigate();

  return (
    <FarmCard onClick={() => navigate(`/farmItem/${_id}`)}>
      <FarmCardImg src={img} alt={name} />
      <FarmCardTitle>{name}</FarmCardTitle>
    </FarmCard>
  );
};

export default FarmItem;
