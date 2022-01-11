import { REGISTER_LECTURER, REGISTER_STUDENT } from "../actions/actionTypes";
import axiosInstance from "../../constants/axios";
// import axios from "axios";

import api_urls from '../../constants/api-urls.json';

export const register = (data) => async (dispatch) => {
  try {
    await axiosInstance
    .post(api_urls.root_url + api_urls.register_extension, data) // .post("http://localhost:8080/api/auth/signup", data)
      .then((response) => {
        if (response && response.status === 200) {
          //history.push("/Login");
          if (response.data.userType === "lecturer") {
            dispatch({
              type: REGISTER_LECTURER,
              payload: data,
            });
          } else {
            dispatch({
              type: REGISTER_STUDENT,
              payload: data,
            });
          }
        }
        else if (response.status === 400) {
          alert(response.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
};
