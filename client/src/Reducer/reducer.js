import {  GET_DATA } from "../Actions/constants";


const stateInitial = {
    listProducts: []
}


const reducer = (state = stateInitial, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                listProducts: payload
            }

        default:
            return state;
    }
}

export default reducer;