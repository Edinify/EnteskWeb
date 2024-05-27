import { BASKET_ACTION_TYPE } from "../actionType";

const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASKET_ACTION_TYPE.GET_BASKET_DATA:
      return {
        ...state,
        basket: action.payload,
      };
    case BASKET_ACTION_TYPE.CREATE_BASKET: {
      const existProduct = state.basket.find(data => data.id === action.payload.id);

      let newBasket;
      if (existProduct === undefined) {
        newBasket = [...state.basket, action.payload];
      } else {
        newBasket = state.basket.map(data =>
          data.id === action.payload.id ? { ...data, count: data.count + 1 } : data
        );
      }

      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }
    case BASKET_ACTION_TYPE.DELETE_BASKET:
      const updatedBasket = state.basket.filter(data => data.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };
    default:
      return state;
  }
};
