import React, { useEffect } from "react";
import { useState }  from "react";
import StyleReactStudy from "../ReactStudy/ReactStudy.module.css"

/**
 * useEffect 쉽게 정리하기
 * - "useEffect(function() {})" 는 html 렌더링 후 실행, 재렌더링할 때, 값이 변하니까 재렌더링해서 실행
 * - "useEffect(function() {}, [variable])" 는 variable의 값이 변하면 실행 그리고 variable 에서 빈 값 [] 넣으면 한 번만 실행
 * - "useEffect(function() { return function() {} }, [variable])" 는 동작 전에 실행할 때 그리고 기존에 있는 코드 제거할 때 그리고 특이 사항 처음에는 실행하지 않고 삭제, 재렌더링할 때 실행
 */

function Click() {
    let [text, setText] = useState(true);
    let [count, setCount] = useState(1);
    let [test, setTest] = useState('');
    
    // console.log('시작');

    useEffect(function() {
        console.log('재렌더링');
        let time = setTimeout(function() {
            setText(false);
            console.log('2초 이내에 사라지는 코드 성공?');
        }, 2000);
        return function() {
            clearTimeout(time);
            console.log('재렌더링 시작하기 전');
        }
    })

    // console.log('끝');

    return (
        <>
            {
                text === true ?
                <p>2초 동안 구매하면 공짜~</p> :
                <p>2초 지남 님 공짜 구매 못함 ㅅㄱ 돈 내셈</p>
            }
            <button className={StyleReactStudy.countDown} onClick={function() {
                setCount(count + 1)
                setTest('ok');
                console.log('클릭');
            }}>{count}</button>
            <p>{test}</p>
        </>
    )
}

export default Click;