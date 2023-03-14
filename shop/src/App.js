/* eslint-disable */

import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bg.png';
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from "./routes/Detail";
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            　
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
      </Routes>
    </div>
  );
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
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
          console.log(result.data);

          let copy = [...props.shoes, ...result.data];
          props.setShoes(copy)
        })
        .catch(() => {
          console.log('데이터 가져오기 실패');
        })
      }}>더 보기</button>
    </>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.shoes.id}`}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
  )
}

export default App;
