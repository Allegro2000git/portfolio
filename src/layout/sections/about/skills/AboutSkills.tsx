import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type AboutSkillPropsType = {
  iconId: string;
  title: string;
};

export const AboutSkill = (props: AboutSkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.56);
  margin: 10px;
`;

const SkillTitle = styled.p``;
