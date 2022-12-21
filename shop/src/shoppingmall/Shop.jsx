import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import '../css/style.css';
import bg from '../img/bg.png'
import ShopList from './ShopList';
import ShopDetail from './ShopDetail';
import { Routes, Route, Link } from 'react-router-dom';

function Shop() {

    return (
        <div className="header">
            <Navbar className="header-shop" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='logo' href="#home">logo</Navbar.Brand>
                    <Nav className="me-auto list">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-bg' style={{backgroundImage : 'url(' + bg + ')'}}></div>

            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>

            <Routes>
                <Route path='/' element={<ShopList />} />
                <Route path='/detail' element={<ShopDetail />} />
            </Routes>

            <hr />
            <p style={{color: '#555555', textAlign: 'center'}}>상품 목록</p>
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width='80%' alt="" /> */}
        </div>
    );
}

export default Shop;
