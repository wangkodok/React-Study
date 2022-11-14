import React from "react";
import Content from "./Content";

const comments = [
    { count: 1, lines: '왕', myName: '왕초보',},
    { count: 2, lines: '코', myName: '코딩',},
    { count: 3, lines: '독', myName: '독학',},
    
]

const style = {
    Font: {
        fontSize: 20,
        fontWeight: 700,
        color: '#999',
    },
    Border: {
        border: '1px solid #000',
    }
}

function List(params) {
    console.log(params.title);
    return (
        <ul>
            <li>
                <a href="#">Study</a>
            </li>
            <li>
                <a href="#">{params.title}</a>
            </li>
            <li>
                <a href="#" style={style.Font}>스타일 넣기</a>
            </li>
        </ul>
    )
}

function Container(params) {
    console.log(params);
    return (
        <div>
            {comments.map((arrList, value) => {
                console.log(arrList, value)
                return (
                    <Content key={arrList.count} lines={arrList.lines} myName={arrList.myName} />
                )
            })}
            <Content />
            <Content languageHTML5='HTML5' languageCSS3='CSS3' languageJavaScript='JavaScript' />
            <List title='Study'/>
        </div>
    )
}

export default Container;