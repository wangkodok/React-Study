import React from "react";
import '../css/style.css'
import data from '../data'
import bg from '../img/bg.png';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';

function PageLink() {
    let [shoes, setShoes] = useState(data);
    console.log(shoes);

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainPage shoes={shoes} setShoes={setShoes} /> } />
                <Route path='/detail/:id' element={ <DetailPage shoes={shoes} /> } />
            </Routes>
        </>
    )
}

export default PageLink

function MainPage(props) {
    console.log(props.shoes);

    function ListSort() {
        let shoesCopy = [...props.shoes];
        shoesCopy.sort(function(a, b) {
            return a.price - b.price;
        });
        props.setShoes(shoesCopy);
    }

    return (
        <>
            <div className="img-box">
                <img src={bg} width='100%' alt="" />
            </div>
            <div className="btn-wrap" style={{textAlign : "right"}}>
                <button className="btn btn-dark" onClick={ListSort}>ABC 순서대로</button>
            </div>
            <List shoes={props.shoes}/>
        </>
    )
}

function List(props) {
    console.log(props.shoes);

    return (
        <ul className="study-list">
            {
                props.shoes.map(function(value, i) {
                    return (
                        <Item key={i} shoes={props.shoes[i]} i={i}/>
                    )
                })
            }
        </ul>
    )
}

function Item(props) {
    console.log(props.shoes);
    
    return (
        <li className="item">
            <Link to={`/detail/${props.shoes.id}`}>
                <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="100%" alt="" />
                <p><strong>{props.shoes.title}</strong></p>
                <p><em>{props.shoes.content}</em></p>
                <p><span>{props.shoes.price}원</span></p>
            </Link>
        </li>
    )
}

function DetailPage(props) {
    console.log(props.shoes);
    let {id} = useParams();
    console.log(id);
    let product = props.shoes.find(function(obj) {
        console.log(obj);
        return obj.id === Number(id);
    });
    console.log(product);

    let navigate = useNavigate();

    return (
        <>
            <div className='inner'>
                <Link to={"/"}>홈</Link>
                <button onClick={ () => {
                    navigate('/');
                }}>button태그의 홈 </button>
                <Link onClick={ (e) => {
                    console.log(e.target.innerText);
                    if (e.target.innerText === '홈') {
                        console.log(e);
                        navigate('/');
                    }
                }}>홈</Link>
                <Link to={"/page"}>Link 링크</Link>
                <a href="https://www.naver.com">a 링크</a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${Number(product.id)+1}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{product.title}</h4>
                        <p>{product.content}</p>
                        <p>{product.price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}