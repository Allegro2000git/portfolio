import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type DirectionsPropsType = {
  iconId: string;
  number: string;
  title: string;
};

export const Direction = (props: DirectionsPropsType) => {
  return (
    <StyledDirection>
      <FlexWrapper align={"center"} justify={"center"}>
        <Icon iconId={props.iconId} />
        <div>
          <DirectionNumber>{props.number}</DirectionNumber>
          <DirectionTitle>{props.title}</DirectionTitle>
        </div>
      </FlexWrapper>
    </StyledDirection>
  );
};

const StyledDirection = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.56);
  margin: 10px;
`;

const DirectionNumber = styled.p``;

const DirectionTitle = styled.p``;
