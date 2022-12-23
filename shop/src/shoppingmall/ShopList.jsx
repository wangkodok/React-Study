import React from "react";
import { useState } from 'react';
import ShopItem from './ShopItem';
import data from '../data.js';


function ShopList() {
    let [shoes, setShoes] = useState(data);
    console.log(shoes);

    return (
        <>
            <div style={{textAlign : "right"}}>
                <button className="btn btn-dark" onClick={
                    function() {
                        let shoesCopy = [...shoes];
                        shoesCopy.sort(function(a, b) {
                            return a.price - b.price;  
                        })
                        setShoes(shoesCopy);
                    }
                }>ABC 순서대로</button>
            </div>
            <div className="container text-center">
                <div className="row">
                    {
                        shoes.map(function(value, i) {
                            return (
                                <ShopItem key={i} shoes={shoes[i]} i={i} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ShopList;