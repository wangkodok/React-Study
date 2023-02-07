import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OpenAPI.css"

function OpenAPI() {
    // 주간/주말 박스오피스 API 서비스
    const data = { // obj 형태로 관리
        url: 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?', // 기본 요청 URL
        key: 'key=99967858bd57f51cedf3451969afcfc0&', // API 키
        targetDt: 'targetDt=20230113&', // 날짜 조회하면 금,토,일 박스오피스 조회
        repNationCd: 'repNationCd=K&' // 한국 영화
    }

    let [movie, setMovie] = useState('');

    useEffect(()=>{
        axios.get(`${ data.url + data.key + data.targetDt + data.repNationCd }`)
        .then((res) => {
            console.log(res);
            setMovie(res.data);
        })
        .catch(() => {
            console.log('데이터 가져오기 실패');
        })
    }, [])

    console.log(movie.boxOfficeResult);

    return (
        movie !== '' ?
        <Movie movie={movie} /> :
        null
    )
}

function Movie( {movie} ) {

    let [openingDate, setOpeningDate] = useState(movie);
    let openin = openingDate.boxOfficeResult.weeklyBoxOfficeList[0].openDt.replace(/\-/g,'');

    const year = openin.substr(0, 4);
    const month = openin.substr(4, 2);
    const day = openin.substr(6, 2);

    return (
        <section className="sec-movie">
            <h2>{movie.boxOfficeResult.boxofficeType}</h2>
            <p></p>
            <ul className="movie-list">
                {
                    movie.boxOfficeResult.weeklyBoxOfficeList.map((value, i)=>{
                        return (
                            <li key={i}>
                                <a href="">
                                    <img src="https://via.placeholder.com/1000" alt="img" />
                                    <div className="item-desc">
                                        <p className="title">{movie.boxOfficeResult.weeklyBoxOfficeList[i].movieNm}</p>
                                        <p><strong>개봉일:</strong> {`${year}년 ${month}월 ${day}일`}</p>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default OpenAPI;