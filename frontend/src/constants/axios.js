import axios from "axios";
import { NotificationManager } from "react-notifications";

axios.interceptors.response.use(
function (response) {
    return response;
},
function (error) {
    if (404 === error.response.status) {
    NotificationManager.error(error.response.data);
    } else if (500 === error.response.status) {
    NotificationManager.error(error.response.data);
    } else if (401 === error.response.status) {
    localStorage.clear();
    return (window.location.href = "/login");
    } else if (400 === error.response.status) {
    NotificationManager.error(error.response.data);
    } else {
    return Promise.reject(error);
    }
}
);

export default axios;