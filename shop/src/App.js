/* eslint-disable */

import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bg.png';

function App() {
  return (
    <div className="App">
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
          <div className="col-md-4">
            {/* public 폴더에 있는 이미지 사용할 때 쓰는 코드 process.env.PUBLIC_URL + '/경로/이미지.jpg' */}
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
