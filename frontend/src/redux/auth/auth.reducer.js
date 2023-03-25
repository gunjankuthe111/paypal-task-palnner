import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./auth.type";

const initialState = {
  error: false,
  isAuth: false,
  loading: false,
  token: "",
  name:"",
  email:"",
  pic:"",
  success:false
};

export const AuthReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return {...state, loading: true};
    }
    case SIGNUP_SUCCESS: {
      return {...state, loading: false,success:true};
    }
    case SIGNUP_FAILURE: {
      return {...state, error: true, loading: false};
    }
    case LOGIN_REQUEST: {
      return {...state, loading: true};
    }
    case LOGIN_SUCCESS: {
      return {...state, loading: false, token:payload.token,name:payload.name,email:payload.email, isAuth: true,pic:payload.pic};
    }
    case LOGIN_FAILURE: {
      return {...state, error: true, loading: false};
    }
    default: {
      return state;
    }
  }
};
