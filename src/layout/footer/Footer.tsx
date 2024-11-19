import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify={"space-around"}>
        <Copyright>Designed and developed by Rostam Sadiqi 2021</Copyright>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"instagram"}
                height={"25px"}
                width={"25px"}
                viewBox={"0 0 25px 25px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"socialBall"}
                height={"25px"}
                width={"25px"}
                viewBox={"0 0 25px 25px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"socialBe"}
                height={"25px"}
                width={"25px"}
                viewBox={"0 0 25px 25px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"linkedIn"}
                height={"25px"}
                width={"25px"}
                viewBox={"0 0 25px 25px"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #27add5ce;
`;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.p``;
