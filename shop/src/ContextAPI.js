import { useContext, useState } from "react";
import { ContextAPIData } from "./App"; // "ContextAPIData" 저장한 변수를 불러오기

import styled from "styled-components";

function ContextAPI() {
  let state = useContext(ContextAPIData); // state 자식에게 사용하기
  let [글자, 글자변경] = useState(state.stateData); // state 변경하기

  return (
    <ContextAPISection style={{ textAlign: "left", padding: "20px" }}>
      <h1 className="title">{state.stateData[0].title}</h1>
      <p className="desc">{state.stateData[0].content.title}</p>
      <p>버튼 클릭하면 글자변경: {글자[0].title}</p>
      <button
        onClick={() => {
          let copy = [...글자];
          copy[0].title = "변경";
          글자변경(copy);
        }}
        style={{
          border: "1px solid #000",
          margin: "20px 0 0 0",
          padding: "10px",
        }}
      >
        버튼
      </button>
      <StateList />
    </ContextAPISection>
  );
}

function StateList() {
  let state = useContext(ContextAPIData); // state 자식에게 사용하기
  return (
    <ContextAPIContent>
      <div className="content">
        <h2 className="content-title">－{state.stateData[0].paragraph}</h2>
        <ul className="list">
          <StateItems />
        </ul>
      </div>
    </ContextAPIContent>
  );
}

function StateItems() {
  let state = useContext(ContextAPIData); // state 자식에게 사용하기
  return (
    <>
      <li className="item">
        <p className="language">
          ㆍ라이브러리: {state.stateData[0].content.language}
        </p>
      </li>
    </>
  );
}

export default ContextAPI;

let ContextAPISection = styled.section`
  .title {
    padding: 10px 0;
    font-size: 32px;
    font-weight: 700;
  }
`;

let ContextAPIContent = styled.div`
  .content {
    padding: 20px 0;
  }
  .content-title {
    font-size: 20px;
  }
  .list {
    .item {
      font-size: 20px;
    }
  }
`;
