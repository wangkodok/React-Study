/* eslint-disable */

// 리액트 사용
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 라이브러리
import { Nav } from "react-bootstrap";

function Detail(props) {
  let [alert, setAlert] = useState(false);
  let [탭, 탭변경] = useState(0);
  useEffect(() => {
    // console.log("화면 실행하거나, 업데이트될 때");
    let time = setTimeout(() => {
      console.log(0);
      setAlert(true);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(time);
    };
  });

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  return 찾은상품 === undefined ? null : (
    <div className="container">
      {alert === true ? null : (
        <div className="alert alert-warning">2초 이내에 구매 시 할인</div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탭 메뉴 */}
      <TabMenu 탭={탭} />
    </div>
  );
}

function TabMenu({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let time = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(time);
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
export default Detail;
