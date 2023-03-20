import { useEffect, useState } from "react";
import styled from "styled-components";

function MouseEvent() {
  let [fade, setFade] = useState("");
  let CSSName = ["", "", ""];
  let [CSS, setCSS] = useState(CSSName);
  let [heightSize, setHeightSize] = useState([0, 0, 0]);

  useEffect(() => {
    let time = setTimeout(() => {
      setFade("mouse-end");
    }, 10);
    return () => {
      clearTimeout(time);
      setFade("");
    };
  }, [CSS]);

  return (
    <>
      <div>
        {/* gnb */}
        <Gnb>
          <GnbList>
            <GnbItem
              className={CSS[0] === "" ? "" : fade}
              onMouseEnter={(e) => {
                if (e.target.nextSibling === null) {
                  return;
                } else {
                  let height = e.target.nextSibling.firstChild.offsetHeight;
                  let copyHeight = [...heightSize];
                  copyHeight[0] = height;
                  setHeightSize(copyHeight);
                }

                let copy = [...CSSName];
                copy[0] = "on";
                setCSS(copy);
              }}
              onMouseLeave={() => {
                setHeightSize([0, 0, 0]);

                let copy = [...CSSName];
                copy[0] = "";
                setCSS(copy);
              }}
            >
              <GnbLink href="">마우스오버0</GnbLink>
              <Lnb style={{ height: `${heightSize[0]}px` }}>
                <LnbList>
                  <LnbItem>
                    <LnbLink href="">마우스오버0</LnbLink>
                  </LnbItem>
                </LnbList>
              </Lnb>
            </GnbItem>
            <GnbItem
              className={CSS[1] === "" ? "" : fade}
              onMouseEnter={(e) => {
                if (e.target.nextSibling === null) {
                  return;
                } else {
                  let height = e.target.nextSibling.firstChild.offsetHeight;
                  let copyHeight = [...heightSize];
                  copyHeight[1] = height;
                  setHeightSize(copyHeight);
                }

                let copy = [...CSSName];
                copy[1] = "on";
                setCSS(copy);
              }}
              onMouseLeave={() => {
                setHeightSize([0, 0, 0]);

                let copy = [...CSSName];
                copy[1] = "";
                setCSS(copy);
              }}
            >
              <GnbLink href="">마우스오버1</GnbLink>
              <Lnb style={{ height: `${heightSize[1]}px` }}>
                <LnbList>
                  <LnbItem>
                    <LnbLink href="">마우스오버1</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버1</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버1</LnbLink>
                  </LnbItem>
                </LnbList>
              </Lnb>
            </GnbItem>
            <GnbItem
              className={CSS[2] === "" ? "" : fade}
              onMouseEnter={(e) => {
                if (e.target.nextSibling === null) {
                  return;
                } else {
                  let height = e.target.nextSibling.firstChild.offsetHeight;
                  let copyHeight = [...heightSize];
                  copyHeight[2] = height;
                  setHeightSize(copyHeight);
                }

                let copy = [...CSSName];
                copy[2] = "on";
                setCSS(copy);
              }}
              onMouseLeave={() => {
                setHeightSize([0, 0, 0]);

                let copy = [...CSSName];
                copy[2] = "";
                setCSS(copy);
              }}
            >
              <GnbLink href="">마우스오버2</GnbLink>
              <Lnb style={{ height: `${heightSize[2]}px` }}>
                <LnbList>
                  <LnbItem>
                    <LnbLink href="">마우스오버2</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버2</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버2</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버2</LnbLink>
                  </LnbItem>
                  <LnbItem>
                    <LnbLink href="">마우스오버2</LnbLink>
                  </LnbItem>
                </LnbList>
              </Lnb>
            </GnbItem>
          </GnbList>
        </Gnb>
      </div>
    </>
  );
}

export default MouseEvent;

/**
 * 스타일 컴포넌트
 */

// gnb
let Gnb = styled.div`
  background-color: #eee;
`;

let GnbList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

let GnbItem = styled.li`
  position: relative;
  width: calc(100% / 3);
  margin: 0 10px 0 0;

  &.mouse-end {
    > div {
      visibility: visible;
    }
  }

  :last-child {
    margin: 0;
  }
`;

let GnbLink = styled.a`
  padding: 20px 0;
  border: 1px solid #000;
`;

// lnb
let Lnb = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #ddd;
  overflow: hidden;
  visibility: hidden;
  transition: all 0.5s;
`;

let LnbList = styled.ul``;

let LnbItem = styled.li``;

let LnbLink = styled.a`
  padding: 10px 0;
`;
