import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { 변경, 이름변경, 숫자증가, 오브젝트변경 } from "../store"; // store 파일에서 변경해주는 함수 불러오기

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state);

  // useDispatch 사용하기
  let dispatch = useDispatch();

  return (
    <>
      {/* <div>{state.user}</div> */}
      <div>{state.리터럴변경.name}</div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((value, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    // 3. 불러온 함수를 감싸주고 변경하기 "dispatch(변경())" 작성하기
                    onClick={() => {
                      dispatch(오브젝트변경());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
