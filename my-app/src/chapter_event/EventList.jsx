import { React } from "react";
import EventItem from "./EventItem";

function List() {
    return (
        <nav>
            <ul className="gnb-list">
                <EventItem />
                <EventItem />
            </ul>
        </nav>
    )
}

export default List;