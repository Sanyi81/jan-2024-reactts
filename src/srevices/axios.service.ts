import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../models/responseModels/UsersResponseModel";
import {PostsResponseModel} from "../models/responseModels/PostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users');
};

const getAllPostsOfUser = (id:number): Promise<AxiosResponse<PostsResponseModel>> => {
    return axiosInstance.get('/posts/user/'+id);
}

export {
    getAllUsers,
    getAllPostsOfUser
};
