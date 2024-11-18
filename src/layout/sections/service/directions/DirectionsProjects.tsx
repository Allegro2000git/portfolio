import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type DirectionProjectsPropsType = {
  subtitle: string;
  title: string;
  iconId: string;
};

export const DirectionsProjects = (props: DirectionProjectsPropsType) => {
  return (
    <StyledDirectionProjects>
      <FlexWrapper direction={"column"} align={"start"}>
        <ProjectSubtitle>{props.subtitle}</ProjectSubtitle>
        <ProjectTitle>{props.title}</ProjectTitle>
        <Icon iconId={props.iconId} />
      </FlexWrapper>
    </StyledDirectionProjects>
  );
};

const StyledDirectionProjects = styled.div`
  padding: 50px 0;
`;

const ProjectSubtitle = styled.h3``;

const ProjectTitle = styled.h2`
  max-width: 380px;
  text-align: left;
`;
