import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

function ApiStudy() {
    let [api, setApi] = useState('');

    useEffect(() => {
        axios.get('https://www.omdbapi.com/?apikey=d4a3eccb&s=frozen')
        .then((res) => {
            console.log(res.data.Search);
            setApi(res.data.Search)
        })
        .catch(() => {
            console.log('데이터 가져오기 실패');
        })

        return () => {
        }
    }, [])
    console.log(api);

    return (
        <section>
            <h1>OMDb API 사용하여 영화 정보를 얻어서 구현</h1>
            <ul>
                {
                    api !== ''
                    ? <Item api={api} />
                    : null
                }
            </ul>
        </section>
    )
}

function Item(props) {
    return (
        <>
            {
                props.api.map((value, i)=>{
                    return (
                        <li key={i}>
                            <h2>{props.api[i].Title}</h2>
                            <img src={props.api[i].Poster} alt="" />
                        </li>
                    )
                })
            }
        </>
    )
}

export default ApiStudy;