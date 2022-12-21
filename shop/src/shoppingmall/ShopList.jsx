import React from "react";
import { useState } from 'react';
import ShopItem from './ShopItem';
import data from '../data.js';


function ShopList() {
    let [shoes, setShoes] = useState(data);

    return (
        <>
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