import { PRODUCT_ACTIONS } from "../actionType";

const initialState = {
  products: [
    {
        id: "59a41c03-b978-4e55-87b5-8dd77c20f01d",
        product: "robot",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
      {
        id: "2ce548fc-c587-458a-afa1-be517c76ef67",
        product: "maşın",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
      {
        id: "c862ca45-6126-483b-9cf9-dd9110011811",
        product: "təyyarə",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
      {
        id: "40694e4e-0404-4d4c-b09b-47baf87b8c17",
        product: "at",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
      {
        id: "2d4c80af-5d0d-45c5-a890-56b8948f3504",
        product: "mehsul5",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
      {
        id: "01a03b48-8f88-442a-ab14-f854980d4769",
        product: "mehsul6",
        content: "Cox maraqlı məhsuldur",
        img: "",
      },
     
  ],
  productDetails:{},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case PRODUCT_ACTIONS.GET_PRODUCT_DETAILS:
        return{
          ...state,
          productDetails:action.payload
        }
    default:
      return state;
  }
};
