import Axios from "axios";

export const axiosAPI = Axios.create({
    baseURL: "https://hris.klylylydeee.xyz"
});

export const axiosAPIHeader = Axios.create({
    baseURL: "hris.klylylydeee.xyz",
    headers: {
        Authorization: {
            toString () {
                return `Bearer ${localStorage.getItem('Authorization')}`
            }
        }
    }
});