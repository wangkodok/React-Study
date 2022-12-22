import React from "react";
import bg from '../img/bg.png';
import { Routes, Route, Link } from 'react-router-dom';

function PageLink() {
    return (
        <>
            <div className="img-box">
                <img src={bg} width='100%' alt="" />
            </div>
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/SubPage'>상세페이지</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/SubPage' element={<SubPage />} />
            </Routes>

        </>
    )
}

export default PageLink

function SubPage() {
    return (
        <div>서브 페이지 입니다.</div>
    )
}

function MainPage() {
    return (
        <>
            <ul className="list">
                <li>
                    <a href="/">메뉴</a>
                </li>
                <li>
                    <a href="/SubPage">서브</a>
                </li>
            </ul>
        </>
    )
}