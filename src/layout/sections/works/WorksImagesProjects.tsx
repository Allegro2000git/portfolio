import styled from "styled-components";
import work1 from "../../../assets/images/work1.webp";
import work2 from "../../../assets/images/work2.webp";
import work3 from "../../../assets/images/work3.webp";
import work4 from "../../../assets/images/work4.webp";

export const WorksProjectsAll = () => {
  return (
    <StyledWorksProjectsAll>
      <Photo src={work1} />
      <Photo src={work2} />
      <Photo src={work3} />
      <Photo src={work4} />
    </StyledWorksProjectsAll>
  );
};

const StyledWorksProjectsAll = styled.section`
  background-color: violet;
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
  align-self: center;
  justify-self: center;
  margin: 60px;
`;

const Photo = styled.img`
  width: 545px;
  height: 350px;
  object-fit: cover;
  border-radius: 35px;
`;
