/* eslint-disable */

import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bg.png';
import data from "./data";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">

      {/* URL 작성하여 페이지 이동 */}
      <Routes>
        <Route path="/" element={<div>메인페이지</div>}/>
        <Route path="/detail" element={<div>서브페이지</div>}/>
      </Routes>

      {/* 클릭하여 페이지 이동 */}
      <Link to="/">메인페이지</Link>
      <Link to="/detail">서브페이지</Link>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((value, i) => {
              return (
                <Card key={i} shoes={shoes[i]} i={i} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
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
