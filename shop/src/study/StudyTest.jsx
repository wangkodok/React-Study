import React, { useEffect } from "react";
import '../css/style.css'
import data from '../data'
import bg from '../img/bg.png';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import StudyCSS from './Study.module.css';
import styled from "styled-components";
import axios from "axios";


function PageLink() {
    let [shoes, setShoes] = useState(data);
    console.log(shoes)

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainPage shoes={shoes} setShoes={setShoes} /> } />
                <Route path='/detail/:id' element={ <DetailPage shoes={shoes} setShoes={setShoes} /> } />
            </Routes>
        </>
    )
}

export default PageLink

function MainPage(props) {
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

    useEffect(() => {
        let time = setTimeout( () => {
            setCountDown(false);
            console.log('2초 후 실행');
        }, 2000)

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
        }
    }, [])
    
    return (
        <>
            {
                countDown === true ? 
                <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${Number(ids)+1}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[Number(ids)].title}</h4>
                        <p>{props.shoes[Number(ids)].content}</p>
                        <p>{props.shoes[Number(ids)].price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}