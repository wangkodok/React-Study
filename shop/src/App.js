/* eslint-disable */

// 파일 불러오기
import "./App.css";
import data from "./data";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import MouseEvent from "./MouseEvent";
import ContextAPI from "./ContextAPI";
import ContextData from "./ContextData"; // state 불러오기
import Scroll from "./Scroll"; // Scroll Event

// 이미지 소스
import bg from "./img/bg.png";
import loadingSpinner from "./img/loadingSpinner.gif";

// 리액트 사용
import { createContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// 라이브러리
import axios from "axios";

// ContextAPI
export let ContextAPIData = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [buttonCount, setButtonCount] = useState(1);
  let [is, setIs] = useState(false);
  let [stateData, setStateData] = useState(ContextData); // state 저장

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className="navbar bg-primary">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>　<Link to="/detail">Detail</Link>　
            <Link to="/ui_component">ui-component</Link>　
            <Link to="/Cart">Cart</Link>　
            <Link to="/ContextAPI">ContextAPI</Link>　
            <Link to="/Scroll">Scroll</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shoes={shoes}
              setShoes={setShoes}
              buttonCount={buttonCount}
              setButtonCount={setButtonCount}
              is={is}
              setIs={setIs}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/ui_component" element={<MouseEvent />} />
        <Route
          path="/ContextAPI"
          element={
            // state 전달하고 싶은 컴포넌트에게 "변수.Provider" 감싸주고 저장된 state 변수 value={{ }} 안에 저장하기
            <ContextAPIData.Provider value={{ stateData, setStateData }}>
              <ContextAPI />
            </ContextAPIData.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </div>
  );
}

function Home(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((value, i) => {
            return <Card key={i} shoes={props.shoes[i]} i={i} />;
          })}
        </div>
      </div>
      {props.is === true ? (
        <img src={loadingSpinner} alt="loadingSpinner" />
      ) : null}
      {props.buttonCount < 2 + 1 ? (
        <button
          onClick={() => {
            props.setIs(true); // 데이터 로딩 중이면 로딩 스피너 추가
            axios
              .get(`https://codingapple1.github.io/shop/data2.json`)
              .then((result) => {
                let copy = [...props.shoes, ...result.data];
                props.setShoes(copy);
                props.setButtonCount(props.buttonCount + 1);
                props.setIs(false); // 데이터 로딩 끝나면 로딩 스피너 삭제
              })
              .catch(() => {
                props.setIs(false); // 데이터 가져오기 실패하면 로딩 스피너 보여주지 않기
                console.log("데이터 가져오기 실패");
              });
          }}
        >
          더 보기
        </button>
      ) : (
        <p>더 이상 상품이 없습니다.</p>
      )}
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.shoes.id}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            props.shoes.id + 1
          }.jpg`}
          width="80%"
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
  );
}

export default App;
