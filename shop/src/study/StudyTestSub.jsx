import React, { useState } from "react";
import styled from "styled-components";

let TabMenu = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

let TabList = styled.ul`
    display: flex;
`;

let TabListItem = styled.li`
    width: calc(100% / 3);

    &.on a::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: #000;
    }
`;

let TabListBtn = styled.a`
    position: relative;
    padding: 16px 0;
    font-size: 24px;
    text-align: center;


    &:hover {
        background-color : #000;
        color : #fff
    }
`;

function Container() {
    const [tab, setTab] = useState(0);

    return (
        <TabMenu>
            <TabList variant="tabs" defaultActiveKey="tab0">
                <TabListItem className={`${tab === 0 ? 'on' : ''}`} >
                    <TabListBtn eventKey="tab0" onClick={() => { setTab(0) }} href="#">탭</TabListBtn>
                </TabListItem>
                <TabListItem className={`${tab === 1 ? 'on' : ''}`} >
                    <TabListBtn eventKey="tab1" onClick={() => { setTab(1) }} href="#">탭</TabListBtn>
                </TabListItem>
                <TabListItem className={`${tab === 2 ? 'on' : ''}`} >
                    <TabListBtn eventKey="tab2" onClick={() => { setTab(2) }} href="#">탭</TabListBtn>
                </TabListItem>
            </TabList>
            <div>
                {
                    [<p>탭 내용 1</p>, <p>탭 내용 2</p>, <p>탭 내용 3</p>][tab]
                }
            </div>
        </TabMenu>
    )
}

export default Container;