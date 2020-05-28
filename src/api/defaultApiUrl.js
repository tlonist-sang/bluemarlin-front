import axios from 'axios'
import {renewAccessToken} from "./mainAPI";
import {TOAST_OPTION} from "../constant/constants";
import {toast} from "react-toastify";

export default axios.create({
        baseURL: `http://localhost:8081`
    }
)

export const bluemarlinapis = ()=> {
    let instance = axios.create({
        baseURL: `http://localhost:8081`
    });
    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            await renewAccessToken();
            await toast.info('Session expired.', TOAST_OPTION);
            setTimeout(()=>{

            }, 3000)
            await window.location.reload();
        });
    return instance;
}