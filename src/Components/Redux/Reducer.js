import * as types from './ActionType.js'

const init = {
 loading: false,
 userId:"",
currentProduct: {},
cart: [],
  products: [],
  error: '',
  cart1:[]
}

export const ProductReducer = (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        products: payload,
      }
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    

    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: payload,
        error: '',
        loading: false,
      }
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }



    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, payload],
        error: '',
        loading: false,
      }
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: [...payload],
        error: '',
        loading: false,
      }
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
      case types.GETCARTDATA:

        console.log("payload",payload)
  
        return {
          ...state,
          cart1: payload,
        }
   case types.GETUSERID:
      return {
        ...state,
        userId: payload,
      }
    default:
      return state
  }
}
 