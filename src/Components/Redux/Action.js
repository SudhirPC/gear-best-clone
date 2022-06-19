import * as types from "./ActionType.js";
import Axios from "axios";

//FetchData functions
const fetchDataRequest = (payload) => {
    return {
      type: types.FETCH_DATA_REQUEST,
      payload,
    }
  }
  const fetchDataSuccess = (payload) => {
    return {
      type: types.FETCH_DATA_SUCCESS,
      payload,
    }
  }
  const fetchDataFailure = (payload) => {
    return {
      type: types.FETCH_DATA_FAILURE,
      payload,
    }
  }

  //fetData axios function

  //getSingleProduct function
  const getSingleProductRequest = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_REQUEST,
      payload,
    }
  }
  const getSingleProductSuccess = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload,
    }
  }
  const getSingleProductFailure = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_FAILURE,
      payload,
    }
  }

  //getSingleProduct axios functionality

  //addToCart functions
  const addProductCartRequest = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_REQUEST,
      payload,
    }
  }
  const addProductCartSuccess = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_SUCCESS,
      payload,
    }
  }
  const addProductCartFailure = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_FAILURE,
      payload,
    }
  }

  //add to cart axios functionality

  //Fetch from cart functions 
  const fetchCartRequest = (payload) => {
    return {
      type: types.FETCH_CART_REQUEST,
      payload,
    }
  }
  const fetchCartSuccess = (payload) => {
    return {
      type: types.FETCH_CART_SUCCESS,
      payload,
    }
  }
  const fetchCartFailure = (payload) => {
    return {
      type: types.FETCH_CART_FAILURE,
      payload,
    }
  }

  //fetch from cart axios functionality
 
 //Remove from cart funcitons
 const deleteProductCartRequest = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload,
    }
  }
  const deleteProductCartSuccess = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_SUCCESS,
      payload,
    }
  }
  const deleteProductCartFailure = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_FAILURE,
      payload,
    }
  }
  export const loginUserName =(payload)=>{
    return {
      type:types.GETUSERNAME,
      payload
    }
  }
  export const loginUser=(payload)=>{
    return {
      type:types.GETUSERID,
      payload
    }
  }
  export const AddToCartBackend=(payload)=>(dispatch)=>{
    const {userId,elemId} =payload
    Axios.get(`https://gear-best-by-sudhir.herokuapp.com/cart/${userId}/${elemId}`).then((response)=>{
         console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  const GetCartreducer= (payload) => {
    console.log(types.GETCARTDATA)
         return {
          type:types.GETCARTDATA,
          payload
         }
  }
  export const GetWatchDataFromEnd=(payload)=>(dispatch)=>{
    console.log(payload)
    Axios.get(`https://gear-best-by-sudhir.herokuapp.com/cart/product/watch/${payload}`).then((response)=>{
         console.log(response.data)
         dispatch(GetCartreducer(response.data))
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  const GetIndividualDataFromBackend= (payload) => {
    // console.log(types.GETCARTDATA)
         return {
          type:types.GETINDIVIDUALDATA,
          payload
         }
  }
  export const getIndividualData=(payload)=>(dispatch)=>{
    Axios.get(`https://gear-best-by-sudhir.herokuapp.com/cart/${payload}`).then((response)=>{
      console.log(response.data)
      dispatch(GetIndividualDataFromBackend(response.data))
    }).catch((error)=>{
      console.log(error)
    })
  }

  export  const Logouthandleraction= (payload) => {
    return {
     type:types.LOGOUTUSER,
     payload
    }
}

export const Cartitemdelete = (userId, id) => (dispatch) => {
  Axios.delete(
    `https://gear-best-by-sudhir.herokuapp.com/cart/cartitemdelete/${userId}/${id}`,
  )
    .then((response) => {
      console.log( response)
    })
    .then(()=>{dispatch(GetWatchDataFromEnd(userId))})
    .catch((error) => {
      console.log(error)
    })
}