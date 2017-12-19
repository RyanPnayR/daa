export default function reducer(state = {
    products: [],
    count: 0,
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "ADD_CART":{
            const ct = state.count + 1;
            return { ...state, 
                count: ct
            }
        }
        default: {
            return state;
    }
}
};