import styled from "styled-components";
import tw from "twin.macro";
import FarmItem from "./FarmItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./arrows/NextArrow";
import PrevArrow from "./arrows/PrevArrow";
import { getAllItems_getAllItems } from "../../graphql/item/__generated__/getAllItems";

interface ListProps {
  cats: getAllItems_getAllItems[];
  category: string;
}

const ListContainer = styled.div`
  ${tw`
        w-full
        md:text-center
        px-2
        flex
        justify-center
    `}
`;
const TopContainer = styled.div`
  ${tw`
        
      flex
      flex-col
      items-center
       
    `}
`;
const Title = styled.h2`
  ${tw`
        text-2xl
        mb-2
    `}
`;

const FarmList: React.FC<ListProps> = ({ cats, category }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  console.log(cats[0].name);
  return (
    <ListContainer>
      <TopContainer>
        <Title>{category}</Title>
        {/* <Slider arrows {...settings}> */}
        {cats.map((cat) => (
          <FarmItem {...cat} />
        ))}
        {/* </Slider> */}
      </TopContainer>
    </ListContainer>
  );
};

export default FarmList;
