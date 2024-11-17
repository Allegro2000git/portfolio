import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import aboutImg from "../../../assets/images/aboutImg.webp";
import styled from "styled-components";
import { AboutSkill } from "./skills/AboutSkills";

export const About = () => {
  return (
    <StyledAbout>
      <SectionTitle>About Me</SectionTitle>
      <FlexWrapper justify={"space-between"} align={"center"}>
        <Photo src={aboutImg} />
        <AboutDescription>
          <AboutText>
            Hello! My name is Rostam Sadiqi and I am a
            <span>UX/UI designer</span> and <span>Front End Developer</span>. I
            enjoy creating things that live on the internet. An experienced
            Software Engineer with a demonstrated history of working in the
            Computer Software industry. Skilled in Web Design, UX/UI design, and
            Front-end Development. Specialize in Information Security and
            software engineering, creating dynamic and beautiful web pages. I
            have been in the field for nearly 5 years, and have been loving
            every minute of it.
          </AboutText>
          <AboutText>
            Here are a few technologies I’ve been working with recently:
          </AboutText>
          <FlexWrapper wrap={"wrap"} justify={"space-around"}>
            <AboutSkill iconId={"html"} title={"HTML"} />
            <AboutSkill iconId={"css"} title={"CSS3"} />
            <AboutSkill iconId={"js"} title={"JS"} />
            <AboutSkill iconId={"git"} title={"Git"} />
            <AboutSkill iconId={"react"} title={"React"} />
            <AboutSkill iconId={"vsc"} title={"VS"} />
          </FlexWrapper>
        </AboutDescription>
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 100vh;
  max-width: 1058px;
  margin: 0 auto;
`;

const Photo = styled.img`
  width: 280px;
  height: 420px;
  object-fit: cover;
`;

const AboutDescription = styled.div`
  max-width: 550px;
`;

const AboutText = styled.p``;
