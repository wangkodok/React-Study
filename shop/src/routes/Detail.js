/* eslint-disable */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

  let [alert, setAlert] = useState(false);
  useEffect(() => {
    // console.log("화면 실행하거나, 업데이트될 때")
    let time = setTimeout(() => {
      console.log(0);
      setAlert(true);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(time);
    }
  })
  
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x) {
    return x.id == id
  });
  // console.log(찾은상품)

  let [inputText, setInputText] = useState('0');
  let [text, setText] = useState(false);
  useEffect(() => {
    // 두 번째 방법 replace 사용하기
    let str = inputText.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    console.log(str);
    if (str === '') {
      setText(true);
    } else {
      setText(false);
    }

    // 첫 번째 방법 isNaN(); 사용하기
    // if (isNaN(inputText) === true) {
    //   setText(true);
    // } else {
    //   setText(false);
    // }
  }, [inputText])
  return (
    찾은상품 === undefined ?
    null :
    <div className="container">
      {
        alert === true
        ? null
        : <div className="alert alert-warning">2초 이내에 구매 시 할인</div>
      }
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id + 1}.jpg`}width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        <input type="text" onChange={(e) => {
          setInputText(e.target.value);
        }}></input>
        {
          text === true 
          ? <p>숫자만 입력하세요.</p>
          : null
        }
      </div>
    </div>
  )
}

export default Detail;