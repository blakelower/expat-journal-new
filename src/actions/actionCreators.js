import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as types from "./actionTypes";

export function changeLogin({ inputName, inputValue }) {
  return {
    type: types.LOGIN_START,
    payload: { inputName, inputValue }
  };
}

export const login = ({ email, password }) => dispatch => {
  dispatch({
    type: types.LOGIN_SUCCESS
  });
  axiosWithAuth()
    .post("api/v1/auth/login", {
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.LOGIN_FAILED
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export function signInput({ inputName, inputValue }) {
  return {
    type: types.SIGNUP_START,
    payload: { inputName, inputValue }
  };
}

export const signup = ({
  email,
  password,
  confirm_password,
  first_name,
  last_name
}) => dispatch => {
  dispatch({
    type: types.SIGNUP_SUCCESS
  });
  axiosWithAuth()
    .post("api/v1/auth/signup", {
      email,
      password,
      confirm_password,
      first_name,
      last_name
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.SIGNUP_POST,
        payload: res.data
      });
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getPost = () => dispatch => {
  dispatch({
    type: types.GET_POST_START
  });
  axiosWithAuth()
    .get("/api/v1/journals")
    .then(res => {
      dispatch({
        type: types.GET_POST_SUCCESS,
        payload: res.data.journals
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getIdPost = id => dispatch => {
  dispatch({
    type: types.GET_ID_POST_START
  });
  axiosWithAuth()
    .get(`api/v1/journals/${id}`)
    .then(res => {
      console.log(res.data.journal);
      dispatch({
        type: types.GET_ID_POST_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createNewPost = ({ message, location, image_url }) => dispatch => {
  dispatch({
    type: types.POST_NEW_POST_START
  });
  axiosWithAuth()
    .post("api/v1/journals", {
      message,
      location,
      image_url
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.POST_NEW_POST_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => console.log(err));
};

export function addPost({ inputName, inputValue }) {
  return {
    type: types.ADD_INPUT,
    payload: { inputName, inputValue }
  };
}

export const deletePost = id => dispatch => {
  dispatch({
    type: types.DELETE_POST_START
  });
  axiosWithAuth()
    .delete(`api/v1/journals/${id}`)
    .then(res => {
      console.log(res, "deleted");
      dispatch({
        type: types.DELETE_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export function updatePostChange({ inputName, inputValue }) {
  return {
    type: types.EDIT_POST,
    payload: { inputName, inputValue }
  };
}

export const updateEditPost = ({ id, message, location, image_url, caption }) => dispatch => {
  dispatch({
    type: types.UPDATE_POST_START
  });
  axiosWithAuth()
    .put(`api/v1/journals/${id}`, {
      message,
      location,
      image_url,
      caption
    })
    .then(res => {
      dispatch({
        type: types.UPDATE_POST_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => console.log(err));
};
