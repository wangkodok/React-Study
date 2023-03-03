import { useState } from 'react';
import './App.css';

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState("글 제목");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'white', fontSize: '20px',} }>블로그</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>3월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
