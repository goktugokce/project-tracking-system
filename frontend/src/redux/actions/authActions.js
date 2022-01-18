import axiosInstance from "../../constants/axios";
import { NotificationManager } from "react-notifications";
import api_urls from '../../constants/api-urls.json';

export const register = (data, history) => async (dispatch) => {
  try {
    await axiosInstance
    .post(api_urls.root_url + api_urls.register_extension, data) // .post("http://localhost:8080/api/auth/signup", data)
      .then((response) => {
        if(response){
          NotificationManager.success(response.data);
          history.push("/");
        }
        
      })
      .catch((e) => {
        NotificationManager.error("An error occured.");
      });
  } catch (e) {
    NotificationManager.error("An error occured.");
  }
};
