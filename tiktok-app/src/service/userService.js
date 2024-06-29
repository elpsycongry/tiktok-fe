import axios from 'axios';
import {axiosInstance, BASE_BE_URL} from "./baseProperties";

export const userService =
    {
        getAll: function (data) {
            return axiosInstance.request({
                method: 'POST',
                url: `api/v1/auth/login`,
                data: data,
            })
        },
        getPost: function (id) {
            /// Method will be get
            /// and change url to (`post/${id}`)
        }
    }


export default userService;