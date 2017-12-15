import axios from "axios";

export function fetchCart() {
    return function(dispatch) {
      console.log("test")
      dispatch({type: "ADD_CART", payload: ["item"]});
    }
  }