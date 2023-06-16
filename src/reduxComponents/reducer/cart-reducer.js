import { ActionTypes } from "../constants/action_type";


const initialState = {
  numberCart: 0,
  carts: [],
  numberFav:0,
  favourite:[],
  totalPrice:0,
  totalQuantity:0
  
};

export const CartReducer = (state = initialState, { type, payload }) => {

  console.log(state.numberCart);

  switch (type) {
    
    case ActionTypes.ADD_FAVOURITE:

      {
        let {id,title,price,description,image}=payload;

        /* let item = {
          ...payload,
          quantity: 1
        };
      state.favourite.push(item); */
       if (state.numberFav == 0) {
        let item = {
          ...payload,
          quantity: 1
        };
        state.favourite.push(item);
        
      } else {
        let check = false;
        state.favourite.map((item, index) => {
          if (item.id === payload.id) {
            state.favourite[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let item1 = {
            ...payload,
            quantity: 1
          };
          state.favourite.push(item1);
        }
      }  


      return {
        ...state,
        numberFav:state.numberFav+1
      }

  };
  case ActionTypes.REMOVE_FAVOURITE:{
    return {
      ...state,
      numberFav: state.numberFav - quantity,
      favourite:state.favourite.filter((item)=>{
            return item.id !==state.favourite[payload].id
      })
    }


  }



  
    case ActionTypes.GET_NUMBER_CART: {
      return {
        ...state
      };
    }

    case ActionTypes.ADD_CART:
      {
     let {id,title,price,description,image}=payload;


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
             
      return {
        ...state,
        numberCart: state.numberCart + 1,
         
      }



      
    };
    case ActionTypes.INCREASE_QUANTITY: 
    let quantity = state.carts[payload].quantity;
          state.numberCart++;
          state.carts[payload].quantity++;
          
          return {
                 ...state
              }


    case ActionTypes.DECREASE_QUANTITY: 
     {
      const index = state.carts.findIndex(
        item =>item.id === payload.id

      )

      if (state.carts[index].quantity >1)

          { 
            state.carts[index].quantity -= 1
          }
          else if(state.carts[index].quantity == 1){
            const nextItems = state.carts.filter((item)=>
              item.id !== payload.id
            );
            state.carts = nextItems;
          }

        return{
          ...state,
          numberCart : state.numberCart -1 
        }
    //let {quantity} = state.carts[payload]?.quantity || 0;
    /* let {quantity} = state.carts[payload] || {};

    if (quantity > 0){
      state.numberCart--;
      state.carts[payload].quantity--;
      return { ...state }
    }
     } */


/* {
     
     state.carts.map((item, index) => {
      if (item.id === payload.id) {
        state.carts[index].quantity = state.numberCart; 
        
      }})
    }

     return {
            ...state,
            numberCart:state.numberCart-1 
     } */
    
   /*  if (quantity > 1){
      state.numberCart--;
      state.carts[payload].quantity--;
      return { ...state
      }
    }
     */
  }
    case ActionTypes.DELETE_CART: {

      const {quantity}=state.carts[payload] || {}  // check if state.carts[payload] exists before destructuring
      return {
        ...state,
        numberCart: state.numberCart - quantity,
        
        carts:state.carts.filter((item)=>{
              return item.id !==state.carts[payload].id ?.id
        })
      }

    }


 
    
    case ActionTypes.TOTAL_PRICE:{
      const {price, quantity }=state.carts.reduce((cartTotal,currentItem)=>{
        const {price,quantity}=currentItem;
        let itemTotal=price*quantity;
        cartTotal.quantity=cartTotal.quantity+quantity;
        cartTotal.price=cartTotal.price+itemTotal;
        return cartTotal;

      },
      {
        price: 0,
        quantity: 0
    }

       );

     
        state.totalPrice = parseFloat(price.toFixed(2));
        state.totalQuantity=quantity

    }


    default: {
      return state;
    }
  }
};

