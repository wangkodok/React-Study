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
                <Route path='/inputtext' element={ <InputText /> } ></Route>
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

    // useEffect 안에 있는 코드는 html 렌더링 후 코드 보여준다.
    // 1. 어려운 연산
    // 2. 서버에서 데이터 가져오는 작업
    // 3. 타이머 장착하는 것들

    // useEffect 정리
    // useEffect(() => {}) 1. 재렌더링마다 코드 실행하고 싶을 때
    // useEffect(() => {}, [element]) 2. mount시 1회 코드 실행하고 싶을 때 (element 변경될 때 안에 있는 코드 실행 처음 렌더링할 때도 실행)
    // useEffect(() => { return () => { 3. unmount시 1회 코드 실행하고 싶을 때 }}, [])
    // useEffect 실행 전에 뭔가 실행하려면 언제나 return () => {} 사용한다.

    let [count, setCount] = useState(0);
    let [countDown, setCountDown] = useState(true);
    console.log(countDown);

    useEffect(() => {
        console.log('안녕');
        let time = setTimeout( () => {
            setCountDown(false);
            console.log('2초 후 실행');
        }, 2000)

        console.log(11);
        return () => { // 동작 전에 실행된다.
            console.log(111);
            clearTimeout(time);
        }
    }, [])
    
    return (
        <>
            {
                countDown === true ? 
                <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
            }
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
            <button onClick={function() {
                let copyCount = count;
                copyCount = count + 1;
                setCount(copyCount);

                setCountDown(true);
            }}>버튼 {count}</button>
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

// function InputText() {
//     // useEffect 안에 있는 코드는 html 렌더링 후 코드 보여준다.
//     // 1. 어려운 연산
//     // 2. 서버에서 데이터 가져오는 작업
//     // 3. 타이머 장착하는 것들

//     // useEffect 정리
//     // useEffect(() => {}) 1. 재렌더링마다 코드 실행하고 싶을 때
//     // useEffect(() => {}, [element]) 2. mount시 1회 코드 실행하고 싶을 때 (element 변경될 때 안에 있는 코드 실행, 처음 렌더링할 때도 실행)
//     // useEffect(() => { return () => { 3. unmount시 1회 코드 실행하고 싶을 때 }}, [])
//     // useEffect 실행 전에 뭔가 실행하려면 언제나 return () => {} 사용한다.

//     let [countDown, setCountDown] = useState(true);

//     useEffect(() => {
//         let time = setTimeout( () => {
//             // setCountDown(false);
//         }, 2000)

//         return () => { // 동작 전에 실행된다.
//             clearTimeout(time);
//         }
//     }, [])

//     return (
//         <div className="text-center">
//             {
//                 countDown === false ? 
//                 <p style={{ fontSize: '24px', backgroundColor: '#ffffa6', padding: '20px 0', }}>숫자만 입력하세요.</p> 
//                 : null
//             }
//             <input onChange={function(e) {
//                 const countText = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
//                 if (countText === '') {
//                     setCountDown(false);
//                     e.target.value = '';
//                 } else {
//                     setCountDown(true);
//                     console.log(e.target.value);
//                 }
//             }} type="text" />
//         </div>
//     )
// }

function InputText() {
    let [change, setChange] = useState('');

    useEffect(() => {
        if (isNaN(change) === true) {
            alert('숫자만 입력하세요.')
        }
    }, [change])

    return (
        <div className="text-center">
            <input onChange={(e) => {
                setChange(change = e.target.value);
                console.log(change);
            }} type="text" />
        </div>
    )
}