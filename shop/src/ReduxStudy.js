import { useDispatch, useSelector } from "react-redux";
import { listChange, setCountObj } from "./store"; // store 파일에서 변경해주는 함수 불러오기
import { useState } from "react";

function ReduxStudy() {
  // 리덕스 객체 가져오기
  let state = useSelector((state) => {
    return state;
  });
  // console.log(state);

  // useDispatch 사용하기
  let dispatch = useDispatch();

  return (
    <>
      <section>
        <h1 style={{ margin: "0 0 100px 0" }}>리덕스 연습</h1>
        <div>
          <ul>
            {state.list.map((value, index) => {
              let stateCopy = { ...state.list };
              return (
                <li key={index}>
                  {/* <p>{count[index]}</p> */}
                  {/* <p>{state.list[index].age}</p> */}

                  {stateCopy[index].age === 100 ? (
                    <p>1</p>
                  ) : (
                    <p>{stateCopy[index].age + 1}</p>
                  )}
                  <p>{stateCopy[index].price}</p>
                  <button
                    onClick={() => {
                      // let copy = [...count];
                      // copy[index] = copy[index] + 1;
                      // console.log(copy);
                      // setCount(copy);

                      // dispatch(listChange(state.list[index].title));

                      dispatch(listChange(index));
                    }}
                  >
                    버튼
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ReduxStudy;
