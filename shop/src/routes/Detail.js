/* eslint-disable */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

  let [alert, setAlert] = useState(false);
  useEffect(() => {
    console.log("화면 실행하거나, 업데이트될 때")
    setTimeout(() => {
      setAlert(true);
    }, 2000);
  }, [])
  
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x) {
    return x.id == id
  });
  console.log(찾은상품)

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
    </div>
  )
}

export default Detail;