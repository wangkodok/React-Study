import React from "react";

function ShopItem(props) {
    return (
        <>
            <div className="col-md-4">
                <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width='80%' alt="" />
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}원</p>
            </div>
        </>
    )
}

export default ShopItem;