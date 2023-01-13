import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./store/userSlice";
import { addCount } from "./store";

function Cart() {

    let state = useSelector((state) => {
        return state
    })
    // console.log(state.cart);

    let dispatch = useDispatch();

    return (
        <div>

            <h6>{state.user.name} {state.user.age} 의 장바구니</h6>
            <button onClick={()=>{
                dispatch( increase(100) );
            }}>숫자 변경</button>

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
                    {
                        state.cart.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>
                                        <button onClick={() => {
                                            // dispatch( changeName() );
                                            dispatch( addCount(state.cart[i].id) );
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;