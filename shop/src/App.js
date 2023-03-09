/* eslint-disable */

import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bg.png';
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from "./routes/Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate(); // 1. useNavigate: import 사용하여 useNavigate 불러오기

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            　
            <Link to="/detail">Detail</Link>
            　
            <button onClick={(e) => {
              if (e.target.textContent === 'login') {
                navigate("/"); // 2. useNavigate: navigate( ) 경로 작성하기
                e.target.textContent = 'login out';
              } else {
                e.target.textContent = 'login';
              }
            }}>login</button>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {/* 404 페이지를 만들고 싶으면 path="" 속성값으로 * 작성하기 */}
        <Route path="*" element={<div>404 페이지</div>}/>
        <Route path="/" element={<Home shoes={shoes} />}/>
        <Route path="/detail" element={<Detail />}/>

        {/* 1. Outlet: <Route>???</Route> ??? 안에서 Route 작성하기 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
          <Route path="mainTest" element={<MainTest />}>
            <Route path="sub_test" element={<div>sub_test</div>} />
            <Route path="detail_test" element={<div>detail_test</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>Nested routes</h4>
      
      {/* 2. Outlet: Route 작성한 코드를 보여주고 싶을 때 <Outlet /> 작성하기*/}
      <Outlet />
    </div>
  )
}

function MainTest() {
  return (
    <div>
      <h4>Nested routes MainTest</h4>
      <Outlet />
    </div>
  )
}

function Home(props) {
  return (
    <>
      <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div>
      <div className="container">
        <div className="row">
          {
            props.shoes.map((value, i) => {
              return (
                <Card key={i} shoes={props.shoes[i]} i={i} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
