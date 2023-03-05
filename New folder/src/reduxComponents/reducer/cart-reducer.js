import { ActionTypes } from "../constants/action_type";


const initialState = {
  numberCart: 0,
  carts: []
};

export const CartReducer = (state = initialState, { type, payload }) => {

  console.log(state.numberCart);

  switch (type) {
    case ActionTypes.GET_NUMBER_CART: {
      return {
        ...state
      };
    }

    case ActionTypes.ADD_CART:
      {
        if (state.numberCart == 0) {
          let item = {
            ...payload,
            quantity: 1
          };
          state.carts.push(item);
        } else {
          let check = false;
          state.carts.map((item, index) => {
            if (item.id === payload.id) {
              state.carts[index].quantity++;
              check = true;
            }
          });
          if (!check) {
            let item1 = {
              ...payload,
              quantity: 1
            };
            state.carts.push(item1);
          }
        }
      }

      return {
        ...state,
        numberCart: state.numberCart + 1
      };

    case ActionTypes.DELETE_CART: {

    }

    case ActionTypes.INCREASE_QUANTITY: {

    }

    case ActionTypes.DECREASE_QUANTITY: {
    }

    default: {
      return ;
    }
  }
};
