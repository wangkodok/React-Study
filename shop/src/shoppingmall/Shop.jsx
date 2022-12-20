import { useState } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import '../css/style.css';
import bg from '../img/bg.png'
import data from '../data.js';
import ShopItem from './ShopItem';

function Shop() {

    let [shoes, setShoes] = useState(data);

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
            <p style={{color: '#555555', textAlign: 'center'}}>상품 목록</p>
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width='80%' alt="" /> */}
            <div className="container text-center">
                <div className="row">
                    {
                        shoes.map(function(value, i) {
                            return (
                                <ShopItem key={i} shoes={shoes[i]} i={i} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Shop;
