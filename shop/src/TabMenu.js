import { useState } from "react";
import styled from "styled-components";

function TabMenu() {
  let [tabClick, setTabClick] = useState([false, false, false]);

  document.querySelector('click', () => {
    console.log('ok');
  })
  return (
    <TabWrap>
      <TabList>
        <TabItem className={tabClick[0] === false ? 'on' : null}>
          <TabLink href="" onClick={(e) => {
            e.preventDefault();
            let copy = [...tabClick];
            copy[0] = false;
            copy[1] = false;
            copy[2] = false;
            setTabClick(copy);
          }}>상품 정보</TabLink>
          <TabContent className="content">
            <div>
              <p>상품 정보입니다.</p>
            </div>
          </TabContent>
        </TabItem>
        <TabItem className={tabClick[1] === true ? 'on' : null}>
          <TabLink href="" onClick={(e) => {
            e.preventDefault();
            let copy = [...tabClick];
            copy[0] = true;
            copy[1] = true;
            copy[2] = false;
            setTabClick(copy);
          }}>리뷰</TabLink>
          <TabContent className="content">
            <div>
              <p>리뷰입니다.</p>
            </div>
          </TabContent>
        </TabItem>
        <TabItem className={tabClick[2] === true ? 'on' : null}>
          <TabLink href="" onClick={(e) => {
            e.preventDefault();
            let copy = [...tabClick];
            copy[0] = true;
            copy[1] = false;
            copy[2] = true;
            setTabClick(copy);
          }}>상품 문의</TabLink>
          <TabContent className="content">
            <div>
              <p>상품 문의입니다.</p>
            </div>
          </TabContent>
        </TabItem>
      </TabList>
    </TabWrap>
  )
}

export default TabMenu;

// 스타일 컴포넌트
let TabWrap = styled.div`
  position: relative;
  height: 320px;
  padding: 100px 0 0 0;
`

let TabList = styled.ul`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #000;
`

let TabItem = styled.li`
  width: calc(100% / 3);
  background-color: #eee;
  
  /* 탭 메뉴 활성화 */
  &.on {
    background-color: #000;

    a {
      color: #fff;
    }

    .content {
      display: block;
    }
  }
`

let TabLink = styled.a`
  position: relative;
  padding: 10px 0;
`

let TabContent = styled.div`
  display: none; /* 탭 메뉴 비활성화 */
  position: absolute;
  right: 0;
  left: 0;
  padding: 32px 0;
`