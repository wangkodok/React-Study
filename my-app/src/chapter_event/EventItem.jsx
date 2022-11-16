import { React } from "react";
import EventSubList from "./EventSubList";

function Click() {
    alert('클릭 했어요.');
}

function Item() {
    return (
        <li onClick={Click}>
            <a href="#" >클릭</a>
            <EventSubList />
        </li>
    )
}

export default Item;