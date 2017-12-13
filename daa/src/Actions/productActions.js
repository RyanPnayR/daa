import axios from "axios";

export function fetchProducts() {
    return function(dispatch) {
      console.log("test")
      dispatch({type: "FETCH_PRODUCTS"});
      
      /* 
        http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
        If you get console errors due to bad data:
        - change "reacttest" below to any other username
        - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
      */
      axios.get("http://localhost:1234/products")
        .then((response) => {
          dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
        })
    }
  }