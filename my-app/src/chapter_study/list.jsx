import React from "react";

function ListItems(props) {
    console.log(props.topics);
    const Itmes = []
    for (let i = 0; i < props.topics.length; i++) {
        let boxTopics = props.topics[i]
        Itmes.push(
            <li key={boxTopics.id}>
                <a href="#">{boxTopics.title}</a>
            </li>
        )
    }
    return (
        <ul>
            {Itmes}
        </ul>
    )
}

function List() {
    const topics = [
        {id: 1, title: 'html', body: 'Hypertext Markup Language 하이퍼 텍스트 마크업 언어'},
        {id: 2, title: 'css', body: 'Cascading Style Sheets 캐스케이딩 스타일'},
        {id: 3, title: 'js', body: 'JavaScript 자바스크립트'},
    ]
    return (
        <nav>
            <ListItems key={topics.id} topics={topics} />
            {/* {topics.map((keyTopics) => {
                return (
                    <ListItems key={keyTopics.id} topics={topics} />
                )
            })} */}
        </nav>
    )
}

export default List;