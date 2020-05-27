import {LOG_IN, LOG_OUT, SET_TOKEN, DELETE_TOKEN} from "../constant/constants"


const INITIAL_STATE = {
    isLoggedIn: null,
    userId: null,
    token: null
};

export default (state = INITIAL_STATE, action)=>{
  switch (action.type) {
      case LOG_IN:
          return {...state, isLoggedIn: true, userId: action.payload};
      case LOG_OUT:
          return {...state, isLoggedIn: false, userId: null};
      case SET_TOKEN:
          return {...state, token: action.payload};
      case DELETE_TOKEN:
          return {...state, token: null};
      default:
          return state;
  }
};




