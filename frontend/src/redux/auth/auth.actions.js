import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "./auth.type";

export const signupData =
  ({name, image, password, email}) =>
  async (dispatch) => {
    try {
      dispatch({type: SIGNUP_REQUEST});
      let res = await fetch("http://localhost:8080/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, pic: image}),
      });
      res = await res.json();
      if(res.email){
        dispatch({type: SIGNUP_SUCCESS, payload: res});
        alert("User Created Successfully")
      }else{
        dispatch({type: SIGNUP_SUCCESS, payload: res});
        alert(res.message)
      }
    } catch (e) {
      console.log(e);
      dispatch({type: SIGNUP_FAILURE});
    }
  };
  
export const LoginData = (cred) => async (dispatch) => {
  try {
    dispatch({type: LOGIN_REQUEST});
    
    let res = await fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    });
    res = await res.json();
    dispatch({type: LOGIN_SUCCESS, payload: res});
  } catch (e) {
    dispatch({type: LOGIN_FAILURE});
  }
};
