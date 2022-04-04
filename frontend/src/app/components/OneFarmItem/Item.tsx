import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { RootState } from "../../store";
import { SCREENS } from "../global/screens";

const PageContainer = styled.div`
  background-image: url("/assets/Field.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  ${tw`
 flex
 items-center
 flex-col
 mb-6

`}
`;
const ItemTitle = styled.h1`
  ${tw`
      text-2xl 
      lg:text-5xl 
      text-center
      text-white
      py-3 
      lg:py-6
`}
`;
const ItemContainer = styled.div`
  ${tw`
flex
bg-white
flex-wrap
// px-1 
//   md:px-3 
//   lg:px-5

 
`}
  /* opacity: 0.8; */
  @media (min-width: ${SCREENS.lg}) {
    justify-content: center;
    width: 70%;
  }
`;
const ImgContainer = styled.div`
  ${tw`
  flex
  justify-center
  w-full
 
`}
  @media (min-width: ${SCREENS.lg}) {
  }
`;
const InfoContainer = styled.div`
  ${tw`
  px-1
  py-2
`}
`;
const Img = styled.img`
  ${tw`
        w-full
        object-cover
    `}
`;
const Item = () => {
  const { id } = useParams();
  const items = useSelector((state: RootState) => state.item.FarmItems);
  const filtered = items.filter((item) => item._id === id);
  const item = filtered[0];
  console.log(item);
  return (
    <PageContainer>
      <ItemTitle>{item.name}</ItemTitle>
      <ItemContainer>
        <ImgContainer>
          <Img src={item.img} alt={item.name} />
        </ImgContainer>
        <InfoContainer>{item.information}</InfoContainer>
      </ItemContainer>
    </PageContainer>
  );
};

export default Item;
