import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import '../css/style.css';
import bg from '../img/bg.png'
import ShopList from './ShopList';
import ShopDetail from './ShopDetail';
import { useState } from 'react';
import data from '../data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Shop() {
    let [shoes, setShoes] = useState(data);

    let navigate = useNavigate();

    return (
        <div className="header">
            <Navbar className="header-shop" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='logo' href="#home">logo</Navbar.Brand>
                    <Nav className="me-auto list">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link onClick={
                            function() {
                                navigate('/detail');
                            }
                        }>클릭(navigate)</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-bg' style={{backgroundImage : 'url(' + bg + ')'}}></div>

            <Link to='/'>홈 </Link>
            <Link to='/detail'>상세페이지 </Link>
            <Link to='/event'>이벤트 </Link>

            <Routes>
                <Route path='/' element={<ShopList />} />
                <Route path='/detail/:id' element={<ShopDetail shoes={shoes} />} />
                <Route path='*' element={<div>404 없는 페이지요</div>} />

                {/* nested routes */}
                {/* 여러 유사한 페이지 필요할 때 */}
                <Route path='/event' element={<About />}>
                    <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
                    <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
                </Route>

                {/* <Route path='/About/member' element={<About />} /> */}
                {/* <Route path='/About/location' element={<About />} /> */}
            </Routes>

            <hr />
            <p style={{color: '#555555', textAlign: 'center'}}>상품 목록</p>
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width='80%' alt="" /> */}
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>오늘의 이벤트</h1>
            <Link to='/event/one'>one </Link>
            <Link to='/event/two'>two</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Shop;
