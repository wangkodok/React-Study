import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Pc, Tablet } from "./ResponsiveSize";

export default function Responsive() {
  const isTablet = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <Section>
      {/* 지역에서 사용하는 미디어쿼리 */}
      {isTablet !== true ? (
        <Title>리액트로 만든 반응형 미디어쿼리</Title>
      ) : (
        <Title>모바일 버전: 리액트로 만든 반응형 미디어쿼리</Title>
      )}

      <SectionContent>
        <SubTitle>npm i react-responsive 설치하여 사용</SubTitle>
        {/* // PC 레이아웃 */}
        <Pc>
          <List>
            <Item>리액트 훅 사용</Item>
            <Item>콘텐츠 반응형 웹</Item>
            <Item>리액트로 웹 앱 만들어보기</Item>
          </List>
        </Pc>
        {/* // Tablet 레이아웃 */}
        <Tablet>
          <List>
            <Item>리액트 훅 사용</Item>
            <Item>useMediaQuery 다양한 방법 익히기</Item>
            <Item>익히고 컴포넌트가 많은 웹 사이트 반응형으로 만들기</Item>
          </List>
        </Tablet>
      </SectionContent>
    </Section>
  );
}

// 스타일 컴포넌트
const Section = styled.section`
  padding: 20px;
  background-color: #ff0;
  transition: all 0.5s ease;

  /* 미디어쿼리 1023px 부터 */
  @media screen and (max-width: 1023px) {
    background-color: #0ff;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SectionContent = styled.div``;

const SubTitle = styled.p`
  margin: 0 0 10px 0;
`;

const List = styled.ul``;

const Item = styled.li``;
