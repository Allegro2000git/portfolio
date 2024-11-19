import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Direction } from "./directions/Directions";
import { DirectionsProjects } from "./directions/DirectionsProjects";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";
import proj3 from "../../../assets/images/proj3.webp";

export const Service = () => {
  return (
    <StyledService>
      <span>My service</span>
      <SectionTitle>What I Do </SectionTitle>
      <FlexWrapper>
        <Direction iconId={"code"} number={"01"} title={"UX/UI Design"} />
        <Direction
          iconId={"ux"}
          number={"02"}
          title={"Front End Development"}
        />
        <Direction
          iconId={"responsibility"}
          number={"03"}
          title={"Responsive Design"}
        />
      </FlexWrapper>
      <StyledProjects>
        <FlexWrapper
          direction={"column"}
          justify={"space-between"}
          align={"center"}
        >
          <FlexWrapper>
            <DirectionsProjects
              subtitle={"UX/UI design"}
              title={"Implement UX design into live and user friendly "}
              iconId={"arrow"}
            />
            <Photo src={proj1} />
          </FlexWrapper>
          <FlexWrapper>
            <DirectionsProjects
              subtitle={"Front end development"}
              title={"Implement UX design into live and user friendly "}
              iconId={"arrow"}
            />
            <Photo src={proj2} />
          </FlexWrapper>
          <FlexWrapper>
            <DirectionsProjects
              subtitle={"Responsive design"}
              title={
                "I build landing pages and responsive websites and web App"
              }
              iconId={"arrow"}
            />
            <Photo src={proj3} />
          </FlexWrapper>
        </FlexWrapper>
      </StyledProjects>
    </StyledService>
  );
};

const StyledService = styled.section`
  min-height: 100vh;
  background-color: #cdcd82;
  text-align: center;
`;

const StyledProjects = styled.div`
  margin: 50px 0 0 0;
`;

const Photo = styled.img`
  width: 554px;
  height: 394px;
  object-fit: cover;
  border-radius: 25px;
`;
