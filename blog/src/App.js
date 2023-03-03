/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'white', fontSize: '20px',} }>블로그</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={() => {
          따봉변경(따봉 + 1);
        }}>👍</span> {따봉}</h4>
        <p>3월 3일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 5일 발행</p>
      </div>
    </div>
  );
}

export default App;
