import { useEffect, useState } from "react";

function TestCode() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [isSearchBtn, setIsSearchBtn] = useState(false);
  const [tag, setTag] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  function onInput(e) {
    setQuery(e.target.value);
    // setIsSearchBtn(false);
  }

  function onClick() {
    if (query === "") {
      alert("입력하지 않았습니다.");
      return;
    }
    setIsSearchBtn(true);
    setVisibleCount(3);
  }

  useEffect(() => {
    if (isSearchBtn === true) {
      fetch(
        `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `KakaoAK ${process.env.REACT_APP_SERIAL_NUMBER}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.documents.length === 0) {
            // 검색어가 없으면 나오는 문구
            setTag(
              <div>
                <strong style={{ color: "red" }}>{`"${query}"`}&#160;</strong>
                라는 검색어가 없습니다.
              </div>
            );
          }
          setData(data.documents);
          setIsSearchBtn(false);
        });
    }
  }, [query, isSearchBtn]);

  return (
    <section>
      <div>
        <input type="text" onInput={onInput} />
        <button onClick={onClick}>버튼</button>
      </div>
      {data.length === 0
        ? tag
        : data.slice(0, visibleCount).map((value, i) => {
            return <p key={i}>{data[i].title}</p>;
          })}
      {visibleCount < data.length ? (
        <button onClick={handleShowMore}>더 보기</button>
      ) : data.length === 10 ? (
        <div>더 이상 없습니다.</div>
      ) : null}
    </section>
  );
}

export default TestCode;
