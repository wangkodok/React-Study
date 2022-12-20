import React from "react";

function ShopItem(props) {
    return (
        <>
            <div className="col-md-4">
                <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width='80%' alt="" />
                <h4>{props.shoes.content}</h4>
                <p>{props.shoes.title}</p>
            </div>
        </>
    )
}

export default ShopItem;