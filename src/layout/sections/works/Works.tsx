import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { WorksProjectsAll } from "./WorksImagesProjects";
import { Button } from "../../../components/Button";
import { Menu } from "../../../components/menu/Menu";

const itemsWork = [
  "All",
  "UX/UI Design",
  "Web Design",
  "Front End Development",
];

export const Works = () => {
  return (
    <StyledWorks>
      <span>Portfolio</span>
      <SectionTitle>My recent works</SectionTitle>
      <Menu menuItems={itemsWork} />
      <WorksProjectsAll />
      <Button>See More</Button>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: #a56c02;
  text-align: center;
`;
