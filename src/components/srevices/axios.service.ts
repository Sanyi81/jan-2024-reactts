import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
// import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get('/users');
};

// const getAllPostsOfUser = (): Promise<AxiosResponse<IPostModel[]>> => {
//     return axiosInstance.get('/posts/user/id');
// }

export {
    getAllUsers,
    // getAllPostsOfUser
};
