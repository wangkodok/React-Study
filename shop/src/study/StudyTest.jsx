import React, { useEffect } from "react";
import '../css/style.css'
import data from '../data'
import bg from '../img/bg.png';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import StudyCSS from './Study.module.css';
import styled from "styled-components";


function PageLink() {
    let [shoes, setShoes] = useState(data);

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainPage shoes={shoes} setShoes={setShoes} /> } />
                <Route path='/detail/:id' element={ <DetailPage shoes={shoes} /> } />
                <Route path='/about' element={ <About /> } >
                    <Route path='member' element={ <Member /> } />
                    <Route path='location' element={ <Location /> } />
                </Route>
            </Routes>
        </>
    )
}

export default PageLink

function MainPage(props) {

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
    let {id} = useParams();
    let product = props.shoes.find(function(obj) {
        return obj.id === Number(id);
    });

    let navigate = useNavigate();

    // useEffect 안에 있는 코드는 html 렌더링 후 코드 보여주기
    
    
    let [test, setTest] = useState(0);
    let [open, setOpen] = useState(true);

    useEffect(() => {
        let a = setTimeout(() => {
            setOpen(false);

        }, 2000);
        return ()=> {
            clearTimeout(a)
        }
    }, [])

    return (
        <>
            <div className='inner'>
                <Link to={"/"}>홈</Link>
                <button onClick={ () => {
                    navigate('/');
                }}>button태그의 홈 </button>
                <Link onClick={ (e) => {
                    if (e.target.innerText === '홈') {
                        navigate('/');
                    }
                }}>홈</Link>
                <Link to={"/page"}>Link 링크</Link>
                <a href="https://www.naver.com">a 링크</a>
            </div>
            {
                open === true ? 
                    <div className="alert alert-warning">2초이내 구매시 할인</div>
                : null
            }
            <button onClick={() => {
                let copyCount = test;
                copyCount = copyCount + 1;
                setTest(copyCount);
            }}>버튼 {test}</button>
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

// styled-components
let YellowBtn = styled.button`
    background-color : ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`;

// YellowBtn 카피
let NewBtn = styled(YellowBtn)`
    border: 5px solid black;
    box-sizing: border-box;
    color: white;
`;

let Box = styled.div`
    background-color: #eee;
    padding: 20px;
`;

let ButtonBox = styled.button`
    background-color: yellow;
    color: black;
    border: 5px solid black;
    font-weight: 700;
    padding: 10px;
`;

const ReactStyleBtn = function(props) {
    return (
        <ButtonBox>{props.children}</ButtonBox>
    )
}

function About() {
    let navigate = useNavigate();

    return (
        <div>
            <Box>
                <ReactStyleBtn>버튼</ReactStyleBtn>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
                <NewBtn bg="red">dd</NewBtn>
            </Box>
            <div>회사 소개</div>
            <p>회사는 소개합니다.</p>
            {/* <Link to={'/about/location'}>location</Link>
            <Link to={'/about/member'}>member</Link> */}

            {/* <button onClick={() => {
                navigate('/about/location');
            }}>location</button><br />
            <button onClick={() => {
                navigate('/about/member');
            }}>member</button> */}

            <Link onClick={(e) => {
                e.preventDefault();
                navigate('/about/location');
            }}>location</Link>

            <Link onClick={(e) => {
                e.preventDefault();
                navigate('/about/member');
            }}>member</Link>

            <Outlet></Outlet>
        </div>
    )
}

function Member() {
    return (
        <p>　· Member 컴포넌트</p>
    )
}

function Location() {
    return (
        <p>　· Location 컴포넌트</p>
    )
}