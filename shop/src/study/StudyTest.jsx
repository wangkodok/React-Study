import React, { createContext, useContext, useEffect } from "react";
import '../css/style.css'
import data from '../data'
import bg from '../img/bg.png';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import StudyCSS from './Study.module.css';
import StudyTestCSS from './StudyTest.module.css';
import styled from "styled-components";
import axios from "axios";
import Cart from "./Cart";
import { addItem } from "./store";
import { useDispatch } from "react-redux";

let Context1 = createContext(); // 다른 파일의 Context1 사용하고 싶으면 import 시키기


function PageLink() {
    let [shoes, setShoes] = useState(data);
    console.log(shoes)

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainPage shoes={shoes} setShoes={setShoes} /> } />
                <Route path='/detail/:id' element={<DetailPage shoes={shoes} setShoes={setShoes} />} />
                
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}

export default PageLink

function MainPage(props) {

    let obj = {
        name: 'kim',
        age: 20
    }
    localStorage.setItem('data', JSON.stringify(obj));
    let localData = localStorage.getItem('data')
    let objData = JSON.parse(localData);
    console.log(objData);

    let [shoes, setShoes] = useState(data);
    let [proDuctBox, setProDuctBox] = useState(0);

    useEffect(() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
            let copy = [...shoes, ...result.data];
            setShoes(copy);
        })
        .catch(() => {
            console.log('데이터 가져오기 실패');
        })
        return () => {
            setShoes(props.shoes);
            console.log('메인페이지');
            console.log('props.shoes', props.shoes);
        }
    }, [])

    function ListSort() {
        let shoesCopy = [...shoes];
        shoesCopy.sort(function(a, b) {
            return a.price - b.price;
        });
        setShoes(shoesCopy);
    }

    return (
        <>
            <div className="img-box">
                <img src={bg} width='100%' alt="" />
            </div>
            <div className="btn-wrap" style={{textAlign : "right"}}>
                <button className="btn btn-dark" onClick={ListSort}>ABC 순서대로</button>
            </div>
            <List shoes={shoes}/>
            <div className="text-center">
                <button onClick={ () => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                        console.log(result.data);
                        let copy = [...shoes, ...result.data];
                        console.log(copy);
                        setShoes(copy);
                    })
                    .catch(() => {
                        console.log('데이터 가져오기 실패');
                    })

                    setProDuctBox(proDuctBox + 1)
                }}>버튼 클릭할 때 마다 상품 3개 추가</button>
            </div>
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
    // let product = props.shoes.find(function(obj) {
    //     return obj.id === Number(id);
    // });
    let [shoes, setShoes] = useState(data);
    let [ids, setids] = useState(null);
    let [countDown, setCountDown] = useState(true);
    let [tab, setTab] = useState(0);

    let [click, setClick] = useState(1);

    let [page, setPage] = useState('');
    let navigate = useNavigate();

    let dispatch = useDispatch();

    useEffect(() => {
        let time = setTimeout( () => {
            setCountDown(false);
            console.log('2초 후 실행');
        }, 2000)
        
        setPage('on'); // 상세 페이지 들어오면 class 'on' 추가

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
            let copy = [...props.shoes, ...result.data];
            props.setShoes(copy);
            setids(id);
        })
        .catch(() => {
            console.log('데이터 가져오기 실패');
        })
        return () => { // 동작 전에 실행된다.
            clearTimeout(time);
            props.setShoes(shoes);
            // setShoes(shoes);

            setPage('');
        }
    }, [])
    
    return (
        <>
            <div className={`detail-page ${page}`}>
                {
                    countDown === true ? 
                    <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
                }
                {/* Context API 경험 */}
                <p>{props.shoes[0].title}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://codingapple1.github.io/shop/shoes${Number(ids)+1}.jpg`} width="100%" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">{props.shoes[Number(ids)].title}</h4>
                            <p>{props.shoes[Number(ids)].content}</p>
                            <p>{props.shoes[Number(ids)].price}원</p>
                            <button className="btn btn-danger" onClick={()=>{
                                console.log('ok');
                                navigate('/cart')
                                dispatch(addItem( {id : 1, name : 'red knit', count : 1} ))
                            }}>주문하기</button> 
                        </div>
                    </div>
                </div> 
                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => {
                            setTab(0)
                        }}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => {
                            setTab(1)
                        }}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={() => {
                            setTab(2)
                        }}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* {
                    tab === 0 ? 
                    <div>내용0</div> : null
                } */}
                <TabContent tab={tab} />



                <div className={StudyTestCSS.item}>탭 UI</div>
                <div style={{display: 'flex'}}>
                    <div className={`item ${click === 0 ? 'on' : ''}`} onClick={() => { setClick(0) }}>Tab 1</div>
                    <div className={`item ${click === 1 ? 'on' : ''}`} onClick={() => { setClick(1) }}>Tab 2</div>
                    <div className={`item ${click === 2 ? 'on' : ''}`} onClick={() => { setClick(2) }}>Tab 3</div>
                    <div className={`item ${click === 3 ? 'on' : ''}`} onClick={() => { setClick(3) }}>Tab 4</div>
                </div>
                <div hidden={ click !== 0 }>　1번</div>
                <div hidden={ click !== 1 }>　2번</div>
                <div hidden={ click !== 2 }>　3번</div>
                <div hidden={ click !== 3 }>　4번</div>
            </div>
        </>
    )
}

function TabContent({tab}) {
    // if (tab === 0) {
    //     return <div>내용1</div>
    // }
    // if (tab === 1) {
    //     return <div>내용2</div>
    // }
    // if (tab === 2) {
    //     return <div>내용3</div>
    // }

    const [fade, setFade] = useState('');

    useEffect(() => {
        let tiem = setTimeout(()=> {
            setFade('end');
        }, 10);

        return () => {
            clearTimeout(tiem);
            setFade('');
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            {
                [<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]
            }
        </div>
    )
}
