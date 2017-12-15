export default function reducer(state = {
    products: [],
    count: 0,
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_CART":
            {
                return { ...state,
                    fetching: true
                }
            }
        case "FETCH_CART_REJECTED":
            {
                return { ...state,
                    fetching: false,
                    error: action.payload
                }
            }
        case "FETCH_CART_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    products: action.payload,
                    count: action.payload.length,
                }
            }
        case "ADD_CART":{
            return {
                ...state,
                products: action.payload,
                count: action.payload.length,
            }
        }
    }
    return state;
};