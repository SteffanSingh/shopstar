import { CartReducer } from "./reducer/cart-reducer";
import { createStore } from "redux";


  const store=createStore(
    CartReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )

      export default  store;