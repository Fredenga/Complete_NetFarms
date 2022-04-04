import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { categories } from "../../categories";
import { RootState } from "../../store";
import { SCREENS } from "../global/screens";
import FarmList from "./FarmList";

const PageContainer = styled.div`
  background-image: url("/assets/sky.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  ${tw`
 flex
 flex-col
 md:items-center
 justify-center

`}
`;
const FarmTitle = styled.h1`
  ${tw`
      text-2xl 
      lg:text-5xl 
      text-center
      text-white
      py-3 
      lg:py-6
`}
`;
const FarmContainer = styled.div`
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${tw`
flex
bg-white
flex-wrap
p-2
lg:p-5
mb-3
lg:mb-6


 
`}
  opacity: 0.8;
  @media (min-width: ${SCREENS.lg}) {
    width: 70%;
  }
  @media (min-width: ${SCREENS.md}) {
    width: 90%;
  }
`;
const FarmItems = () => {
  const items = useSelector((state: RootState) => state.item.FarmItems);
  const cats = items.map((item) => {
    let filtered: any = [];
    categories.forEach((category) => {
      if (category === item.category) {
        filtered.push(item);
      }
    });
    return filtered;
  });
  console.log(cats);
  return (
    <PageContainer>
      <FarmTitle>Farms</FarmTitle>
      <FarmContainer>
        {cats.map((cat) => (
          <FarmList key={cat.id} cats={cat} category={cat[0].category} />
        ))}
      </FarmContainer>
    </PageContainer>
  );
};

export default FarmItems;
