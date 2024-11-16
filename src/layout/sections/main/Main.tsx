import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/mainImg.webp";
import { Button } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-around"} align={"center"}>
        <MainTextWrapper>
          <span>Hello, I’m</span>
          <MainTitle>Fabio Scaletta</MainTitle>
          <MainText>
            I’m a UX/UI designer and Front End Developer based in Kuala Lumpur,
            Malaysia! I love designing, coding, creating and building stuff.{" "}
          </MainText>
          <Button>Send Email</Button>
        </MainTextWrapper>

        <Photo src={mainPhoto} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 50vh;
  background-color: #d4ffd3;
`;

const MainTextWrapper = styled.div`
  max-width: 441px;
`;
const MainTitle = styled.h1``;
const MainText = styled.p``;
const Photo = styled.img`
  width: 548px;
  height: 390px;
  object-fit: cover;
  border-radius: 25px;
`;
