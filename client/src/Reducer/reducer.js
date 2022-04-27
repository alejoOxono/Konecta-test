import { GET_DATA, SEARCH_DATA } from "../Actions/constants";


const stateInitial = {
    listProducts: [],
    productForSell: []
}


const reducer = (state = stateInitial, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                listProducts: payload
            }
            
        case SEARCH_DATA:
            return {
                ...state,
                productForSell: payload
            }
        

        default:
            return state;
    }
}

export default reducer;