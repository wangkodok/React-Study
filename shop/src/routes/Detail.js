/* eslint-disable */

import { useParams } from "react-router-dom";
import styled from "styled-components";

let BoxDiv = styled.div`
  background-color: grey;
  padding: 20px;
`

let YellowButton = styled.button`
  background-color: ${props => props.bg};
  color: ${props => props.bg === 'blue' ? 'white' : 'black'};
  padding: 10px;
`

function Detail(props) {
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x) {
    return x.id == id
  });
  console.log(찾은상품)

  return (
    찾은상품 === undefined ?
    null :
    <div className="container">
      <BoxDiv>
        <YellowButton bg="blue">버튼</YellowButton>
        <YellowButton bg="orange">버튼</YellowButton>
      </BoxDiv>
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