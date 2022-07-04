// 액션
export const increase = (username) => ({type: "INCREMENT", payload: username});
export const decrease = () => ({type: "DECREMENT"});

// 상태
const initstate = {
    username: "Park",
    number: 1,
}

// 액션의 결과를 filtering
const reducer = (state = initstate, action) => {
    switch(action.type) {
        case "INCREMENT":
            // return이 일어나면 호출한 쪽에서 받지 않고 return 되는 순간 ui가 변경된다.
            return {number: state.number + 1, username: action.payload};
        case "DECREMENT":
            return {number: state.number - 1};
        default:
            return state;
    }
}

export default reducer;